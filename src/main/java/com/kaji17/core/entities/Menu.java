package com.kaji17.core.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

/**
 * @author katina
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name = "menu")
public class Menu implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menuid", nullable = false, unique = true, updatable = false)
    private Integer menuid;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "amount", nullable = false)
    private double amount;

    @Column(name = "qrcode")
    private String qrcode;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "menu")
    private List<MenuContent> menuContents;

}
