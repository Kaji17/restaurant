package com.kaji17.core.logics;

import com.kaji17.core.dao.AdministratorDao;
import com.kaji17.core.dto.AdministratorDto;
import com.kaji17.core.dto.AdministratorInfoDto;
import com.kaji17.core.dto.ChangePasswordDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Administrator;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import com.kaji17.core.tools.EncryptTools;
import com.kaji17.core.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

/**
 * @author katina
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AdministratorLogicImpl implements AdministratorLogic {

    private final AdministratorDao administratorDao;

    private final ObjectsValidator<AdministratorDto> validatorAdministratorDto;

    private final ObjectsValidator<ChangePasswordDto> validatorChangePasswordDto;

    private final ObjectsValidator<AdministratorInfoDto> validatorAdministratorInfoDto;

    private final EncryptTools encryptTools;

    @Override
    public Object getAdministrators(Boolean pagination, Integer page, Integer size) {
        try {
            if (Boolean.TRUE.equals(pagination)) {
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting administrator whith pagination ");
                return administratorDao.findAll(pageable);
            } else {
                log.debug("Getting administrator whitout  pagination ");
                return administratorDao.findAll();
            }
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la récupération des administrateurs :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération de la liste des administrateurs");
        }
    }

    @Override
    public void deleteAdministrator(Integer administratorid) {
        Administrator administratorById = administratorDao.findByAdministratorid(administratorid);
        if (Objects.isNull(administratorById))
            throw new ResourceNotFoundException("Ce administrateur n'existe pas");
        try {
            administratorDao.delete(administratorById);
            log.info("Administrator {} deleted with success", administratorById.getEmail());
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la supression de l'administrateur :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la suppression de l'administrateur");
        }
    }

    @Override
    public Administrator updateAdministrator(Integer administratorid, AdministratorInfoDto administratorInfodto) {
        validatorAdministratorInfoDto.validate(administratorInfodto);

        Administrator administratorById = administratorDao.findByAdministratorid(administratorid);
        // Checking if the customer's email is already registered in database
        if (Objects.isNull(administratorById))
            throw new ResourceNotFoundException("Cet aminsitrateur n'existe pas");

        Optional.ofNullable(administratorInfodto.getEmail()).ifPresent(email -> {
            if (!validatorAdministratorDto.isValideEmail(email))
                throw new BadRequestException("Saisissez une addresse email correcte");
            administratorById.setEmail(email);
        });
        Optional.ofNullable(administratorInfodto.getFirstname()).ifPresent(administratorById::setFirstname);
        Optional.ofNullable(administratorInfodto.getLastname()).ifPresent(administratorById::setLastname);
        Optional.ofNullable(administratorInfodto.getPermission()).ifPresent(administratorById::setPermission);

        try {
            log.info("Update administrator exited susccess");
            return administratorDao.save(administratorById);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la modification de l'administrateur :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la modification de l'administrateur");
        }
    }

    @Override
    public Administrator addAdministrator(AdministratorDto administratordto) {
        validatorAdministratorDto.validate(administratordto);

        // Checking if the customer's email is already registered in database
        if (Objects.nonNull(administratorDao.findByEmail(administratordto.getEmail())))
            throw new ResourceAlreadyExistsException("L'email est déjà utilisée");

        // Checking the customer's phone number if the content contains only numbers
        if (!validatorAdministratorDto.isValideEmail(administratordto.getEmail()))
            throw new BadRequestException("Saisissez une addresse email correcte");

        Administrator administrator = new Administrator();
        administrator.setLastname(administratordto.getLastname());
        administrator.setFirstname(administratordto.getFirstname());
        administrator.setEmail(administratordto.getEmail());
        administrator.setRole(null);
        administrator.setPassword(encryptTools.hashPassword(administratordto.getPassword()));
        administrator.setPermission(administratordto.getPermission());

        try {
            Administrator resultat = administratorDao.save(administrator);
            log.info("[*] Registration exited with Successfully");
            log.trace("New administrator : {}", resultat);
            return resultat;
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la création de l'administrateur :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la création de l'administrateur");
        }
    }

    @Override
    public Administrator updateAdministratorPassword(Integer administratorid, ChangePasswordDto changePasswordDto) {
        validatorChangePasswordDto.validate(changePasswordDto);

        Administrator administratorById = administratorDao.findByAdministratorid(administratorid);
        // Checking if the customer's email is already registered in database
        if (Objects.isNull(administratorById))
            throw new ResourceNotFoundException("Cet aminsitrateur n'existe pas");

        if (!encryptTools.checkPassword(changePasswordDto.getLastpassword(), administratorById.getPassword())) {
            throw new ResourceNotFoundException("L'ancien mot de passe saisi n'est pas correct");

        } else {
            administratorById.setPassword(encryptTools.hashPassword(changePasswordDto.getNewpassword()));
            try {
                Administrator result = administratorDao.save(administratorById);
                log.info("Change password exited with success");
                return result;
            } catch (InternalServerException e) {
                log.error("Une erreur s'est produite lors de la création du changement de mot de passe de l'administrateur :: error={}", e.getMessage());
                throw new InternalServerException("Une erreur s'est produite lors du changement de mot de passe de l'administrateur");
            }
        }
    }

    @Override
    public Administrator signinAdministrator(LoginDto loginDto) {
        // Vérifying email format
        if (Boolean.FALSE.equals(validatorAdministratorDto.isValideEmail(loginDto.getEmail())))
            throw new BadRequestException("Veuillez saisir un email valide");

        Administrator administratorByEmail = administratorDao.findByEmail(loginDto.getEmail());

        if (Objects.isNull(administratorByEmail))
            throw new ResourceNotFoundException("Nous n'avons pas pu retrouver l'administrateur avec l'email : " + loginDto.getEmail());

        if (!encryptTools.checkPassword(loginDto.getPassword(), administratorByEmail.getPassword()))
            throw new ResourceNotFoundException("Mot de passe incorrect.");

        return administratorByEmail;
    }
}
