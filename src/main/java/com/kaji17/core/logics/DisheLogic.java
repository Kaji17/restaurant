package com.kaji17.core.logics;

import com.kaji17.core.dto.DisheDto;
import com.kaji17.core.entities.Dishe;
import org.springframework.web.multipart.MultipartFile;

public interface DisheLogic {
    Object getDishes(Boolean pagination, Integer page, Integer size);

    void deleteDishe(Integer dishid);

    Dishe addDishe(String dishdto, MultipartFile[] images);

    Dishe updateDishe(Integer dishid, DisheDto dishedto);
}
