package com.kaji17.core.logics;

import com.kaji17.core.dao.DishePictureDao;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.DishePicture;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.tools.DateTools;
import com.kaji17.core.tools.FileTools;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

/**
 * @author katina
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class ImageLogicImpl implements ImageLogic{
    private final DateTools dateTools;

    private final FileTools fileTools;

    private final Environment env;

    private final DishePictureDao dishePictureDao;
    @Override
    public List<DishePicture> addImage(Dishe dishe, MultipartFile[] images) {

        List<DishePicture> dishePictures = new ArrayList<>();

        Arrays.asList(images).forEach(file -> {
            DishePicture dishePicture = new DishePicture();
            dishePicture.setDate(dateTools.getCurrentDateInTimestamp());
            dishePicture.setDishe(dishe);
            String imagePath=fileTools.createFile(file, env.getProperty("image.path"), dateTools.convertDateToTimestamp(dateTools.getCurrentDateInTimestamp()).trim().replace(" ", "").replace(":", "").replace("-","").replace(".",""));
            dishePicture.setUrl(imagePath.replace(Objects.requireNonNull(env.getProperty("image.path")), Objects.requireNonNull(env.getProperty("image.path.replace"))));
            try {
                DishePicture result = dishePictureDao.save(dishePicture);
                dishePictures.add(result);
                log.info("Image de plat ajouté {}", result);
            }catch (Exception e) {
                log.error("Erreur lors de l'ajout de l'image du plat : {}",e.getMessage());
                throw new InternalServerException(e.getMessage());
            }
        });
        log.info("Liste d'Image qestions ajouté size {}", dishePictures.size());
        return dishePictures;
    }
}
