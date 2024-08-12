package com.kaji17.core.dao;

import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuContentDao extends JpaRepository<MenuContent, Integer> {
    List<MenuContent> findByMenu(Menu element);

    MenuContent findByMenuAndDishe(Menu menu, Dishe dishe);
}
