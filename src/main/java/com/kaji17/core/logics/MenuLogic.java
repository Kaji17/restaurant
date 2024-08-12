package com.kaji17.core.logics;

import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;

public interface MenuLogic {
    Menu addMenu(MenuDto menudto);

    Object getMenus(Boolean pagination, Integer page, Integer size);

    Menu updateMenu(Integer menuid, MenuDto menudto);

    void deleteMenu(Integer menuid);

    MenuContent assignDishToMenu(Integer dishid, Integer menuid);
}
