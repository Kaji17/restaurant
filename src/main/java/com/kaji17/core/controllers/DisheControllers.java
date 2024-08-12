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

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/v1/restaurant/dishe")
public class DisheControllers {

    private final DisheLogic disheLogic;

    @Operation(summary = "Ajouter des plats")
    @PostMapping(value = "/add-dishe", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Dishe> addDish(@RequestParam String dishdto, @RequestParam(required = false) MultipartFile[] images) {
        log.warn("[*] Starting categorie dishe creating :: dishdto = {}", dishdto);
        return ResponseEntity.ok().body(disheLogic.addDishe(dishdto, images));
    }

    @Operation(summary = "Obtenir la liste de tous les plats")
    @GetMapping(value = "/get-dishe")
    public ResponseEntity<Object> getAllDish(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting category dish ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(disheLogic.getDishes(pagination, page, size));
    }

    @Operation(summary = "Modifier un plat")
    @PutMapping(value = "/update-dishe/{dishid}")
    public ResponseEntity<Dishe> updateDishe(@RequestBody DisheDto dishedto, @PathVariable Integer dishid) {
        log.warn("[*] Starting updating dishe :: dishedto = {}, dishid={}", dishedto, dishid);
        return ResponseEntity.ok().body(disheLogic.updateDishe(dishid, dishedto));
    }

    @Operation(summary = "Supprimer un plat")
    @DeleteMapping(value = "/delete-dishe/{dishid}")
    public ResponseEntity<Void> deleteDishe(@PathVariable Integer dishid) {
        log.warn("[*] Starting deleting dishe :: dishid={}", dishid);
        disheLogic.deleteDishe(dishid);
        return ResponseEntity.ok().build();
    }
}
