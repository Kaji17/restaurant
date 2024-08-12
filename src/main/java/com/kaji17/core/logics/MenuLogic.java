package com.kaji17.core.logics;

import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;

/**
 * @author katina
 */
public interface MenuLogic {
    /**
     Adds a new menu to the database.
     @param menudto The {@link MenuDto} containing the details of the new menu.
     @return The newly created {@link Menu} object.
     @throws ResourceAlreadyExistsException if a menu with the same name already exists.
     @throws InternalServerException if an error occurs while saving the menu to the database.
     */
    Menu addMenu(MenuDto menudto);

    /**
     * Retrieves the list of menus. If pagination is requested, the method returns a pageable list of menus.
     *
     * @param pagination  A boolean value indicating whether pagination is required.
     * @param page        The page number to retrieve.
     * @param size         The number of items per page.
     * @return A list of menus if pagination is not requested, otherwise a pageable list of menus.
     * @throws InternalServerException If an error occurs during the retrieval of the menus.
     */
    Object getMenus(Boolean pagination, Integer page, Integer size);

    /**
     Updates an existing menu with the provided menu details.
     @param menuid The unique identifier of the menu to be updated.
     @param menudto The updated menu details.
     @return The updated menu object.
     @throws ResourceNotFoundException If the menu with the given menuid does not exist.
     @throws ResourceAlreadyExistsException If the new menu name already exists.
     @throws InternalServerException If an error occurs during the update process.
     */
    Menu updateMenu(Integer menuid, MenuDto menudto);

    /**
     * Deletes a menu from the database.
     *
     * @param menuid The unique identifier of the menu to be deleted.
     * @throws ResourceNotFoundException If the menu with the given menuid does not exist.
     * @throws InternalServerException If an error occurs during the deletion process.
     */
    void deleteMenu(Integer menuid);

    /**
     Assigns a dish to a menu.
     @param dishid The id of the dish to be assigned to the menu.
     @param menuid The id of the menu to which the dish will be assigned.
     @return The newly created {@link MenuContent} object representing the assignment of the dish to the menu.
     @throws ResourceNotFoundException if the dish or the menu with the given ids are not found in the database.
     @throws InternalServerException if an error occurs while assigning the dish to the menu.
     */
    MenuContent assignDishToMenu(Integer dishid, Integer menuid);
}
