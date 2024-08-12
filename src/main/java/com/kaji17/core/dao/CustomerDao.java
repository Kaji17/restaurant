package com.kaji17.core.dao;

import com.kaji17.core.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Integer> {
    Customer findByEmail(String email);

    Customer findByPhone(String phone);

    Customer findByCustomerid(Integer customerid);
}
