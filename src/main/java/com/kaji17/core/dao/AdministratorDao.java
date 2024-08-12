package com.kaji17.core.dao;

import com.kaji17.core.entities.Administrator;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorDao extends JpaRepository<Administrator, Integer> {
    
    Administrator findByEmail(@NonNull String email);

    Administrator findByAdministratorid(Integer administratorid);
}
