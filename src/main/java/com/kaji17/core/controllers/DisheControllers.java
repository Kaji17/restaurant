package com.kaji17.core.controllers;

import com.kaji17.core.dto.DisheDto;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.logics.DisheLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author katina
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/v1/restaurant/dishe")
public class DisheControllers {

    private final DisheLogic disheLogic;

    /**
     * Adds a new dish to the system.
     *
     * @param dishdto The JSON string representing the dish details.
     * @param images  The optional array of MultipartFile objects containing images for the dish.
     * @return A ResponseEntity containing the newly added dish wrapped in a Dishe object.
     */
    @Operation(summary = "Ajouter des plats")
    @PostMapping(value = "/add-dishe", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Dishe> addDish(@RequestParam String dishdto, @RequestParam(required = false) MultipartFile[] images) {
        log.warn("[*] Starting categorie dishe creating :: dishdto = {}", dishdto);
        return ResponseEntity.ok().body(disheLogic.addDishe(dishdto, images));
    }

    /**
     * Retrieves a list of all dishes in the system.
     *
     * @param pagination A boolean value indicating whether to include pagination in the response.
     *                   If true, the response will include a paginated list of dishes.
     *                   If false, all dishes will be returned without pagination.
     * @param page       The zero-based index of the page to retrieve. Defaults to 0 if not provided.
     * @param size       The number of dishes to include in the response per page. Defaults to 10 if not provided.
     * @return A ResponseEntity containing the list of dishes wrapped in an Object.
     */
    @Operation(summary = "Obtenir la liste de tous les plats")
    @GetMapping(value = "/get-dishe")
    public ResponseEntity<Object> getAllDish(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting category dish ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(disheLogic.getDishes(pagination, page, size));
    }

    /**
     * Updates an existing dish in the system.
     *
     * @param dishedto The updated details of the dish represented as a JSON string.
     * @param dishid   The unique identifier of the dish to be updated.
     * @return A ResponseEntity containing the updated dish wrapped in a Dishe object.
     */
    @Operation(summary = "Modifier un plat")
    @PutMapping(value = "/update-dishe/{dishid}")
    public ResponseEntity<Dishe> updateDishe(@RequestBody DisheDto dishedto, @PathVariable Integer dishid) {
        log.warn("[*] Starting updating dishe :: dishedto = {}, dishid={}", dishedto, dishid);
        return ResponseEntity.ok().body(disheLogic.updateDishe(dishid, dishedto));
    }

    /**
     * Deletes a dish from the system by its unique identifier.
     *
     * @param dishid The unique identifier of the dish to be deleted.
     * @return A ResponseEntity with a status code of 204 (No Content) upon successful deletion.
     */
    @Operation(summary = "Supprimer un plat")
    @DeleteMapping(value = "/delete-dishe/{dishid}")
    public ResponseEntity<Void> deleteDishe(@PathVariable Integer dishid) {
        log.warn("[*] Starting deleting dishe :: dishid={}", dishid);
        disheLogic.deleteDishe(dishid);
        return ResponseEntity.ok().build();
    }
}
