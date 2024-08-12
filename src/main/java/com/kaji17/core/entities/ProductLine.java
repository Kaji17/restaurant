package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author katina
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name = "productline")
public class ProductLine implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productlineid", nullable = false, unique = true, updatable = false)
    private Integer productlineid;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "amount", nullable = false)
    private double amount;

    @ManyToOne
    @JoinColumn(name = "menuid")
    private Menu menu;

    @ManyToOne
    @JoinColumn(name = "clientorderid")
    @JsonIgnore
    @ToString.Exclude
    private ClientOrder clientorder;

}
