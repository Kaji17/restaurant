package com.kaji17.core.dao;

import com.kaji17.core.entities.DishePicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author katina
 */
@Repository
public interface DishePictureDao extends JpaRepository<DishePicture, Integer> {
    DishePicture findByDishepictureid(Integer dishPictureId);
}
