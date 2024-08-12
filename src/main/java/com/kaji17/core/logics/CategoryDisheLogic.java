package com.kaji17.core.logics;

import com.kaji17.core.entities.DisheCategory;

public interface CategoryDisheLogic {
    DisheCategory addCategoryDishe(String categoriedishelibelle);

    Object getCategoryDishe(Boolean pagination, Integer page, Integer size);

    void deleteDishCategory(Integer categoriedishid);
}
