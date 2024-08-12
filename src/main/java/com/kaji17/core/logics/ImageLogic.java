package com.kaji17.core.logics;

import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.DishePicture;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImageLogic {
    List<DishePicture> addImage(Dishe dishe, MultipartFile[] images);
}
