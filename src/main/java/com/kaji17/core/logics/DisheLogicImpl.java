package com.kaji17.core.logics;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kaji17.core.dao.DisheCategoryDao;
import com.kaji17.core.dao.DisheDao;
import com.kaji17.core.dao.DishePictureDao;
import com.kaji17.core.dto.DisheDto;
import com.kaji17.core.entities.Administrator;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.DisheCategory;
import com.kaji17.core.entities.DishePicture;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import com.kaji17.core.tools.FileTools;
import com.kaji17.core.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class DisheLogicImpl implements DisheLogic {

    private final ObjectsValidator<DisheDto> validatorDisheDto;

    private final DisheDao disheDao;

    private final DisheCategoryDao disheCategoryDao;

    private final ImageLogic imageLogic;
    private final FileTools fileTools;
    private final DishePictureDao dishePictureDao;
    private final Environment env;

    @Override
    public Object getDishes(Boolean pagination, Integer page, Integer size) {
        try {
            if (Boolean.TRUE.equals(pagination)) {
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting dish whith pagination ");
                return disheDao.findAll(pageable);
            } else {
                log.debug("Getting dish whitout  pagination ");
                return disheDao.findAll();
            }
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la récupération des plats :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération de la liste des plats");
        }
    }


    @Override
    public void deleteDishe(Integer dishid) {
        Dishe disheById = disheDao.findByDisheid(dishid);
        if (Objects.isNull(disheById))
            throw new ResourceNotFoundException("Ce plat n'existe pas");

        if (Objects.nonNull(disheById.getDishepicture())){
            for (DishePicture picture : disheById.getDishepicture()){
                this.deleteDishPicture(picture.getDishepictureid());
            }
        }
        try {
            disheDao.delete(disheById);

            log.info("Dish {} deleted with success", disheById.getName());
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la supression du plat :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la suppression du plat");
        }
    }

    private void deleteDishPicture(Integer dishPictureId){

        DishePicture dishePictureById  = dishePictureDao.findByDishepictureid(dishPictureId);
        if (Objects.isNull(dishePictureById))
            throw new ResourceNotFoundException("Aucune image trouvée");
        try {
            log.info("Deleting picture {}", dishePictureById.getUrl());
            fileTools.deleteFile(dishePictureById.getUrl().replace(Objects.requireNonNull(env.getProperty("image.host")), Objects.requireNonNull(env.getProperty("image.path"))));
            dishePictureDao.delete(dishePictureById);
        }catch (Exception e){
            log.error("Une erreur s'est produite lors de la suppression de l'image :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la suppression de l'image");
        }
    }

    @Override
    public Dishe addDishe(String dishdtoString, MultipartFile[] images) {
        DisheDto dishdto;
        try {
            ObjectMapper objectMapper = new ObjectMapper();

            // Convertir la chaine de caractère en quizDto
            dishdto = objectMapper.readValue(dishdtoString, DisheDto.class);

            log.info("quiz mapper: {}", dishdto);

        } catch (JsonProcessingException e) {
            log.warn("Error recontrer au moment de convertir la chaine de caractère en objet :: dishDtoToString ={} :: error={}", dishdtoString, e.getMessage());
            throw new BadRequestException("Error recontrer au moment de convertir la chaine de caractère en objet ");
        }
        validatorDisheDto.validate(dishdto);

        if (Objects.nonNull(disheDao.findByName(dishdto.getName())))
            throw new ResourceAlreadyExistsException("Ce plat exite déjà.");

        Dishe dishe = new Dishe();
        dishe.setName(dishdto.getName());
        dishe.setDescription(dishdto.getDescription());
        dishe.setAmount(dishdto.getAmount());

        DisheCategory disheCategoryById = disheCategoryDao.findByDishecategoryid(dishdto.getDishecategoryid());

        if (Objects.isNull(disheCategoryById))
            throw new ResourceNotFoundException("Aucune categorye de plat trouvée.");

        dishe.setDishecategory(disheCategoryById);
        try {
            Dishe result = disheDao.save(dishe);
            log.info("Saved dish successfully : {}", result);

            List<DishePicture> dishePictures = new ArrayList<>();

            if (images != null)
                dishePictures = imageLogic.addImage(result, images);

            result.setDishepicture(dishePictures);
            return disheDao.save(dishe);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'enregistrement des images de plat' :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'enregistrement des images de plat");
        }
    }

    @Override
    public Dishe updateDishe(Integer dishid, DisheDto dishedto) {
        validatorDisheDto.validate(dishedto);

        Dishe disheById = disheDao.findByDisheid(dishid);
        // Checking if the dish is already registered in database
        if (Objects.isNull(disheById))
            throw new ResourceNotFoundException("Ce plat n'existe pas");

        // Checking the customer's phone number if the content contains only numbers
        if (Objects.nonNull(disheDao.findByName(dishedto.getName())))
            throw new ResourceAlreadyExistsException("Ce plat existe déjà");

        Optional.ofNullable(dishedto.getName()).ifPresent(name -> {
            Dishe disheByName = disheDao.findByName(name);
            if (Objects.nonNull(disheByName))
                throw new ResourceAlreadyExistsException("Ce plat existe déjà");
            disheById.setName(name);
        });
        Optional.ofNullable(dishedto.getAmount()).ifPresent(disheById::setAmount);
        Optional.ofNullable(dishedto.getDescription()).ifPresent(disheById::setDescription);
        Optional.ofNullable(dishedto.getDishecategoryid()).ifPresent(dishCategoryid -> {
            DisheCategory disheCategoryById = disheCategoryDao.findByDishecategoryid(dishCategoryid);
            if (Objects.isNull(disheCategoryById))
                throw new ResourceNotFoundException("Aucune categorie de plat trouvé");
            disheById.setDishecategory(disheCategoryById);
        });
        try {
            log.info("Update dish exited susccess");
            return disheDao.save(disheById);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la modificcation du plat :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la modificcation du plat ");
        }
    }
}
