package com.kaji17.core.controllers;

import com.kaji17.core.dto.AdministratorDto;
import com.kaji17.core.dto.AdministratorInfoDto;
import com.kaji17.core.dto.ChangePasswordDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Administrator;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.logics.AdministratorLogic;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/administrator")
public class AdministratorControllers {

    private final AdministratorLogic administratorLogic;

    /**
     * Ajoute un nouvel administrateur au système.
     *
     * @param administratordto DTO contenant les informations de l'administrateur à ajouter.
     * @return ResponseEntity contenant l'administrateur ajouté, avec un statut HTTP 200 (OK).
     */
    @Operation(summary = "Ajouter des administrateurs")
    @PostMapping(value = "/add-admin")
    public ResponseEntity<Administrator> addAdministrateur(@RequestBody AdministratorDto administratordto){
        log.warn("[*] Starting administrator creating :: administratorDto = {}", administratordto);
        return ResponseEntity.ok().body(administratorLogic.addAdministrator(administratordto));
    }

    /**
     * Obtient la liste de tous les administrateurs.
     *
     * @param pagination  Indique si la pagination doit être appliquée. Si true, la pagination est appliquée avec les valeurs par défaut de page et de taille.
     * @param page  Numéro de la page à afficher. Si non spécifié, la valeur par défaut est 0.
     * @param size  Taille de la page à afficher. Si non spécifié, la valeur par défaut est 10.
     * @return ResponseEntity contenant une liste d'administrateurs, avec un statut HTTP 200 (OK).
     */
    @Operation(summary = "Obtenir la liste de tous les administrateurs")
    @GetMapping(value = "/get-admin")
    public ResponseEntity<Object> getAllAdministrateurs(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting administrator ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(administratorLogic.getAdministrators(pagination, page, size));
    }

    /**
     * Modifies an existing administrator in the system.
     *
     * @param administratorInfodto The DTO containing the updated information of the administrator to be modified.
     * @param administratorid The unique identifier of the administrator to be modified.
     * @return ResponseEntity containing the updated administrator, with a status HTTP 200 (OK).
     */
    @Operation(summary = "Modifier un administrateur")
    @PutMapping(value = "/update-admin/{administratorid}")
    public ResponseEntity<Administrator> updateAdministrateur(@RequestBody AdministratorInfoDto administratorInfodto, @PathVariable Integer administratorid) {
        log.warn("[*] Starting updating administrator :: administratordto = {}, administratorid={}", administratorInfodto,administratorid);
        return ResponseEntity.ok().body(administratorLogic.updateAdministrator(administratorid,administratorInfodto));
    }

    @Operation(summary = "Modifier le mot de passe d'un adminsitrateur administrateur")
    @PutMapping(value = "/update-password/{administratorid}")
    public ResponseEntity<Administrator> updateAdministrateurPassword(@RequestBody ChangePasswordDto changePasswordDto, @PathVariable Integer administratorid) {
        log.warn("[*] Starting updating administrator password :: changePasswordObject = {}, administratorid={}", changePasswordDto,administratorid);
        return ResponseEntity.ok().body(administratorLogic.updateAdministratorPassword(administratorid,changePasswordDto));
    }


    /**
     * Deletes an existing administrator from the system.
     *
     * @param administratorid The unique identifier of the administrator to be deleted.
     * @return ResponseEntity with a status HTTP 200 (OK) upon successful deletion.
     */
    @Operation(summary = "Supprimer un administrateur")
    @DeleteMapping(value = "/delete-admin/{administratorid}")
    public ResponseEntity<Void> deleteAdministrator(@PathVariable Integer administratorid) {
        log.warn("[*] Starting deleting administrator :: administratorid={}",administratorid);
        administratorLogic.deleteAdministrator(administratorid);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "connexion d'un administrateur")
    @PostMapping(value = "/signin-administrator")
    public ResponseEntity<Administrator> signinAdministrator(@RequestBody LoginDto loginDto){
        log.warn("[*] Starting login administrator :: loginDto = {}", loginDto);
        return ResponseEntity.ok().body(administratorLogic.signinAdministrator(loginDto));
    }

}
