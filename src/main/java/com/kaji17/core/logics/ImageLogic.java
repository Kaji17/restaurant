package com.kaji17.core.logics;

import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.DishePicture;
import com.kaji17.core.exceptions.InternalServerException;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author katina
 */
public interface ImageLogic {
    /**
     Adds images to the specified dish.
     @param dishe The dish to which the images will be added.
     @param images The MultipartFile array containing the images to be added.
     @return A list of DishePicture objects representing the added images.
     @throws InternalServerException If an error occurs during the addition of an image.
     */
    List<DishePicture> addImage(Dishe dishe, MultipartFile[] images);
}
