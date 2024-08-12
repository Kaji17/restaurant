package com.kaji17.core.dao;

import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.ProductLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLineDao extends JpaRepository<ProductLine, Integer> {
}
