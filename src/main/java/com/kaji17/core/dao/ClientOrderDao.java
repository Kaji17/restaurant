package com.kaji17.core.dao;

import com.kaji17.core.entities.Administrator;
import com.kaji17.core.entities.ClientOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientOrderDao extends JpaRepository<ClientOrder, Integer> {
    ClientOrder findByClientorderid(Integer orderid);
}
