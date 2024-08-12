package com.kaji17.core.dao;

import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.DisheCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisheCategoryDao extends JpaRepository<DisheCategory, Integer> {
    DisheCategory findByName(String categoriedishelibelle);

    DisheCategory findByDishecategoryid(Integer categoriedishid);
}
