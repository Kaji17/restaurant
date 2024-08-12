package com.kaji17.core.controllers;

import com.kaji17.core.entities.DisheCategory;
import com.kaji17.core.logics.CategoryDisheLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/categorie-dish")
public class CategoryDisheControllers {

    private final CategoryDisheLogic categoryDisheLogic;
    @Operation(summary = "Ajouter des catégorie de plats")
    @PostMapping(value = "/add-categorydish")
    public ResponseEntity<DisheCategory> addDishCategory(@RequestParam String categoriedishelibelle){
        log.warn("[*] Starting categorie dishe creating :: CategoriedisheLibelle = {}", categoriedishelibelle);
        return ResponseEntity.ok().body(categoryDisheLogic.addCategoryDishe(categoriedishelibelle));
    }

    @Operation(summary = "Obtenir la liste de tous les catégorie de plats")
    @GetMapping(value = "/get-categorydish")
    public ResponseEntity<Object> getAllDishCategory(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting category dish ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(categoryDisheLogic.getCategoryDishe(pagination, page, size));
    }
    @Operation(summary = "Supprimer une catégorie de plat")
    @DeleteMapping(value = "/delete-categorydish/{categoriedishid}")
    public ResponseEntity<Void> deleteDishCategory(@PathVariable Integer categoriedishid) {
        log.warn("[*] Starting deleting dish category :: categoriedishid={}",categoriedishid);
        categoryDisheLogic.deleteDishCategory(categoriedishid);
        return ResponseEntity.ok().build();
    }

}
