package com.kaji17.core.dao;

import com.kaji17.core.entities.Dishe;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author katina
 */
@Repository
public interface DisheDao extends JpaRepository<Dishe, Integer> {
    Dishe findByName(@NonNull String name);

    Dishe findByDisheid(Integer disheid);
}
