package com.kaji17.core.controllers;

import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;
import com.kaji17.core.logics.MenuLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author katina
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/v1/restaurant/menu")
public class MenuControllers {

    private final MenuLogic menuLogic;

    /**
     * Adds a new menu to the system.
     *
     * @param menudto The DTO containing the details of the new menu to be added.
     * @return A ResponseEntity containing the newly added menu wrapped in a body.
     */
    @Operation(summary = "Ajouter des menu")
    @PostMapping(value = "/add-menu")
    public ResponseEntity<Menu> addMenu(@RequestBody MenuDto menudto) {
        log.warn("[*] Starting menu creating :: menudto = {}", menudto);
        return ResponseEntity.ok().body(menuLogic.addMenu(menudto));
    }

    /**
     * Retrieves a list of all menus from the system.
     *
     * @param pagination A boolean value indicating whether to include pagination in the response. Defaults to true.
     * @param page       The page number of the results to be returned. Defaults to 0.
     * @param size       The number of results to be returned per page. Defaults to 10.
     * @return A ResponseEntity containing the list of menus wrapped in a body.
     */
    @Operation(summary = "Obtenir la liste de tous les menu")
    @GetMapping(value = "/get-menu")
    public ResponseEntity<Object> getAllMenu(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting menu ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(menuLogic.getMenus(pagination, page, size));
    }

    /**
     * Updates an existing menu in the system.
     *
     * @param menudto The DTO containing the details of the updated menu.
     * @param menuid  The unique identifier of the menu to be updated.
     * @return A ResponseEntity containing the updated menu wrapped in a body.
     */
    @Operation(summary = "Modifier un menu")
    @PutMapping(value = "/update-menu/{menuid}")
    public ResponseEntity<Menu> updateMenu(@RequestBody MenuDto menudto, @PathVariable Integer menuid) {
        log.warn("[*] Starting updating menu :: administratordto = {}, menuid={}", menudto, menuid);
        return ResponseEntity.ok().body(menuLogic.updateMenu(menuid, menudto));
    }

    /**
     * Deletes a menu from the system.
     *
     * @param menuid The unique identifier of the menu to be deleted.
     * @return A ResponseEntity with a status code of 200 (OK) and an empty body upon successful deletion.
     */
    @Operation(summary = "Supprimer un menu")
    @DeleteMapping(value = "/delete-menu/{menuid}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Integer menuid) {
        log.warn("[*] Starting deleting menu :: administratorid={}", menuid);
        menuLogic.deleteMenu(menuid);
        return ResponseEntity.ok().build();
    }

    /**
     * Assigns a dish to a menu.
     * This method assigns a dish with the given id to the specified menu.
     *
     * @param dishid The unique identifier of the dish to be assigned to the menu.
     * @param menuid The unique identifier of the menu to which the dish will be assigned.
     * @return A ResponseEntity containing the assigned dish-menu relationship wrapped in a body.
     */
    @Operation(summary = "Assigner un plat à un menu")
    @PostMapping(value = "/assign-didh/{dishid}/menu/{menuid}")
    public ResponseEntity<MenuContent> assignDishToMenu(@PathVariable Integer dishid, @PathVariable Integer menuid) {
        log.warn("[*] Starting assign dish {} to menu {}", dishid, menuid);
        return ResponseEntity.ok().body(menuLogic.assignDishToMenu(dishid, menuid));
    }
}
