package com.kaji17.core.logics;

import com.kaji17.core.dao.DisheCategoryDao;
import com.kaji17.core.entities.Administrator;
import com.kaji17.core.entities.DisheCategory;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Slf4j
@RequiredArgsConstructor
public class CategoryDisheLogicImpl implements CategoryDisheLogic {
    private final DisheCategoryDao disheCategoryDao;

    @Override
    public DisheCategory addCategoryDishe(String categoriedishelibelle) {

        if (Objects.nonNull(disheCategoryDao.findByName(categoriedishelibelle)))
            throw new ResourceAlreadyExistsException("Cette categorie de plat exite déjà.");

        try {
            DisheCategory disheCategory = new DisheCategory();
            disheCategory.setName(categoriedishelibelle);
            DisheCategory result = disheCategoryDao.save(disheCategory);
            log.info("Dish categorie save sucessfull :{}", result);
            return result;
        }catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'enregistrement de la catégorie de plat :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'enregistrement de la catégorie de plat");
        }
    }

    @Override
    public Object getCategoryDishe(Boolean pagination, Integer page, Integer size) {
        try {
            if (Boolean.TRUE.equals(pagination)){
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting dish categorie whith pagination ");
                return disheCategoryDao.findAll(pageable);
            }else {
                log.debug("Getting administrator whitout pagination ");
                return disheCategoryDao.findAll();
            }
        }catch (Exception e){
            log.error("Une erreur s'est produite lors de la récupération des catégorie de plat :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération des catégorie de plat");
        }
    }

    @Override
    public void deleteDishCategory(Integer categoriedishid) {
        DisheCategory disheCategory = disheCategoryDao.findByDishecategoryid(categoriedishid);
        if (Objects.isNull(disheCategory))
            throw new ResourceNotFoundException("Cette catégorie de plat n'existe pas");
        try{
            disheCategoryDao.delete(disheCategory);
            log.info("Dishcategory {} deleted with success",disheCategory.getName());
        }catch (Exception e){
            log.error("Une erreur s'est produite lors de la supression de la categorie de plat :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la categorie de plat");
        }
    }
}
