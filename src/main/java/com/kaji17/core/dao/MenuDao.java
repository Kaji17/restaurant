package com.kaji17.core.dao;

import com.kaji17.core.entities.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author katina
 */
@Repository
public interface MenuDao extends JpaRepository<Menu, Integer> {
    Menu findByName(String name);

    Menu findByMenuid(Integer menuid);
}
