package com.kaji17.core.logics;

import com.kaji17.core.dto.AdministratorDto;
import com.kaji17.core.dto.AdministratorInfoDto;
import com.kaji17.core.dto.ChangePasswordDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Administrator;
import jakarta.security.auth.message.AuthException;

public interface AdministratorLogic {
    Object getAdministrators(Boolean pagination, Integer page, Integer size);

    void deleteAdministrator(Integer administratorid);

    Administrator updateAdministrator(Integer administratorid, AdministratorInfoDto administratorInfodto);

    Administrator addAdministrator(AdministratorDto administratordto);

    Administrator updateAdministratorPassword(Integer administratorid, ChangePasswordDto changePasswordDto);

    Administrator signinAdministrator(LoginDto loginDto);
}
