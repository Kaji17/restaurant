package com.kaji17.core.logics;

import com.kaji17.core.dto.AdministratorDto;
import com.kaji17.core.dto.AdministratorInfoDto;
import com.kaji17.core.dto.ChangePasswordDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Administrator;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import jakarta.security.auth.message.AuthException;

/**
 * @author katina
 */
public interface AdministratorLogic {
    /**
     * This method retrieves a list of all administrators. If pagination is requested, the method will return a list of administrators with the specified page and size. Otherwise, it will return all administrators without pagination.
     *
     * @param pagination  A boolean value indicating whether pagination is required.
     * @param page        The page number of the administrators to be retrieved.
     * @param size         The number of administrators to be retrieved per page.
     * @return A list of all administrators if pagination is not requested, otherwise a list of administrators with the specified page and size.
     * @throws InternalServerException If an error occurs during the retrieval of administrators.
     */
    Object getAdministrators(Boolean pagination, Integer page, Integer size);

    /**
     * Deletes an administrator from the database by their ID.
     *
     * @param administratorid The unique identifier of the administrator to be deleted.
     * @throws ResourceNotFoundException If the administrator with the given ID does not exist.
     * @throws InternalServerException If an error occurs while deleting the administrator.
     */
    void deleteAdministrator(Integer administratorid);

    /**
     Updates an existing administrator's information.
     @param administratorid The unique identifier of the administrator to be updated.
     @param administratorInfodto The updated information of the administrator.
     @return The updated administrator object.
     @throws ResourceNotFoundException If the administrator with the given id does not exist.
     @throws BadRequestException If the provided email is not valid.
     @throws InternalServerException If an error occurs during the update process.
     */
    Administrator updateAdministrator(Integer administratorid, AdministratorInfoDto administratorInfodto);

    /**
     Adds a new administrator to the system.
     @param administratordto the data of the new administrator
     @return the newly created administrator
     @throws ResourceAlreadyExistsException if the email is already registered
     @throws BadRequestException if the email format is incorrect
     @throws InternalServerException if an error occurs during the creation of the administrator
     */
    Administrator addAdministrator(AdministratorDto administratordto);

    /**
     This method updates the password of an administrator.
     @param administratorid The unique identifier of the administrator whose password needs to be updated.
     @param changePasswordDto The object containing the old and new passwords.
     @return The updated administrator object.
     @throws ResourceNotFoundException If the administrator with the given id does not exist.
     @throws BadRequestException If the old password provided does not match the current password of the administrator.
     @throws InternalServerException If an error occurs while updating the password.
     */
    Administrator updateAdministratorPassword(Integer administratorid, ChangePasswordDto changePasswordDto);

    /**
     This method is used to sign in an administrator. It takes a {@link LoginDto} object as input, which contains the email and password of the administrator. The method first validates the email format. If the email format is valid, it searches for an administrator in the database with the provided email. If the administrator is found, it checks if the provided password matches the password stored in the database. If the password is correct, it returns the administrator object. If the email format is invalid, an exception of type {@link BadRequestException} is thrown. If the administrator is not found, an exception of type {@link ResourceNotFoundException} is thrown. If the password is incorrect, another exception of type {@link ResourceNotFoundException} is thrown.
     @param loginDto the {@link LoginDto} object containing the email and password of the administrator
     @return the {@link Administrator} object if the login is successful, otherwise throws an exception
     @throws BadRequestException if the email format is invalid
     @throws ResourceNotFoundException if the administrator is not found or if the password is incorrect
     */
    Administrator signinAdministrator(LoginDto loginDto);
}
