package com.kaji17.core.controllers;

import com.kaji17.core.entities.DisheCategory;
import com.kaji17.core.logics.CategoryDisheLogic;
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
@RequestMapping(value ="api/v1/restaurant/categorie-dish")
public class CategoryDisheControllers {

    private final CategoryDisheLogic categoryDisheLogic;

    /**
     * Adds a new dish category.
     *
     * @param categoriedishelibelle The name or label of the new dish category.
     * @return A {@link ResponseEntity} containing the newly added dish category wrapped in a {@link DisheCategory} object.
     */
    @Operation(summary = "Ajouter des catégorie de plats")
    @PostMapping(value = "/add-categorydish")
    public ResponseEntity<DisheCategory> addDishCategory(@RequestParam String categoriedishelibelle){
        log.warn("[*] Starting categorie dishe creating :: CategoriedisheLibelle = {}", categoriedishelibelle);
        return ResponseEntity.ok().body(categoryDisheLogic.addCategoryDishe(categoriedishelibelle));
    }

    /**
     * Retrieves a list of all dish categories.
     *
     * @param pagination A boolean value indicating whether to include pagination in the response. Defaults to true.
     * @param page The page number of the results to retrieve. Defaults to 0.
     * @param size The number of results per page. Defaults to 10.
     * @return A {@link ResponseEntity} containing the list of dish categories wrapped in an {@link Object} object.
     */
    @Operation(summary = "Obtenir la liste de tous les catégorie de plat")
    @GetMapping(value = "/get-categorydish")
    public ResponseEntity<Object> getAllDishCategory(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting category dish ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(categoryDisheLogic.getCategoryDishe(pagination, page, size));
    }

    /**
     * Deletes a dish category by its ID.
     *
     * @param categoriedishid The unique identifier of the dish category to be deleted.
     * @return A {@link ResponseEntity} with a status code of 204 (No Content) upon successful deletion.
     */
    @Operation(summary = "Supprimer une catégorie de plat")
    @DeleteMapping(value = "/delete-categorydish/{categoriedishid}")
    public ResponseEntity<Void> deleteDishCategory(@PathVariable Integer categoriedishid) {
        log.warn("[*] Starting deleting dish category :: categoriedishid={}",categoriedishid);
        categoryDisheLogic.deleteDishCategory(categoriedishid);
        return ResponseEntity.ok().build();
    }

}
