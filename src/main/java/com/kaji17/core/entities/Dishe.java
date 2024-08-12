package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

/**
 * @author katina
 */
@Setter
@Getter
@ToString
@Entity
@Table(name = "dishe")
public class Dishe implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disheid", nullable = false, unique = true, updatable = false)
    private Integer disheid;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "dishe",fetch = FetchType.EAGER)
    @ToString.Exclude
    private List<DishePicture> dishepicture;

    @Column(name = "amount", nullable = false)
    private double amount;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "dishecategory")
    private DisheCategory dishecategory;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "dishe")
    @JsonIgnore
    @ToString.Exclude
    private List<MenuContent> menuContents;

    public Dishe() {
    }

    public Dishe(Integer disheid, String description, String name, List<DishePicture> dishepicture, double amount, DisheCategory dishecategory) {
        this.disheid = disheid;
        this.description = description;
        this.name = name;
        this.dishepicture = dishepicture;
        this.amount = amount;
        this.dishecategory = dishecategory;
    }

}
