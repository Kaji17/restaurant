package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "customer")
public class Customer implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerid", nullable = false,unique = true, updatable = false)
    private Integer customerid;

    @Column(name = "lastname", nullable = false, length = 64)
    private String lastname;

    @Column(name = "firstname", length = 64)
    private String firstname;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private String password;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "adresse", columnDefinition = "text")
    private String adresse;

    @OneToMany(mappedBy = "customer")
    @ToString.Exclude
    @JsonIgnore
    private List<ClientOrder> clientorder;
}