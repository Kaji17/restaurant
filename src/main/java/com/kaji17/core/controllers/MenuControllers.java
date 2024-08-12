package com.kaji17.core.controllers;

import com.kaji17.core.dto.AdministratorDto;
import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;
import com.kaji17.core.logics.DisheLogic;
import com.kaji17.core.logics.MenuLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/menu")
public class MenuControllers {

    private final MenuLogic menuLogic;
    @Operation(summary = "Ajouter des menu")
    @PostMapping(value = "/add-menu")
    public ResponseEntity<Menu> addMenu(@RequestBody MenuDto menudto){
        log.warn("[*] Starting menu creating :: menudto = {}", menudto);
        return ResponseEntity.ok().body(menuLogic.addMenu(menudto));
    }

    @Operation(summary = "Obtenir la liste de tous les menu")
    @GetMapping(value = "/get-menu")
    public ResponseEntity<Object> getAllMenu(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting menu ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(menuLogic.getMenus(pagination, page, size));
    }

    @Operation(summary = "Modifier un menu")
    @PutMapping(value = "/update-menu/{menuid}")
    public ResponseEntity<Menu> updateMenu(@RequestBody MenuDto menudto, @PathVariable Integer menuid) {
        log.warn("[*] Starting updating menu :: administratordto = {}, menuid={}", menudto,menuid);
        return ResponseEntity.ok().body(menuLogic.updateMenu(menuid,menudto));
    }

    @Operation(summary = "Supprimer un menu")
    @DeleteMapping(value = "/delete-menu/{menuid}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Integer menuid) {
        log.warn("[*] Starting deleting menu :: administratorid={}",menuid);
        menuLogic.deleteMenu(menuid);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Assigner un plat à un menu")
    @PostMapping(value = "/assign-didh/{dishid}/menu/{menuid}")
    public ResponseEntity<MenuContent> assignDishToMenu(@PathVariable Integer dishid, @PathVariable Integer menuid) {
        log.warn("[*] Starting assign dish {} to menu {}",dishid,menuid);
        return ResponseEntity.ok().body(menuLogic.assignDishToMenu(dishid,menuid));
    }
}
