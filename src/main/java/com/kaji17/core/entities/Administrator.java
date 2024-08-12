package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name = "administrator")
public class Administrator implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "administratorid", nullable = false, unique = true, updatable = false)
    private Integer administratorid;

    @ManyToOne
    @JoinColumn(name = "roleid")
    private Role role;

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

    @Column(name = "permission", columnDefinition = "text")
    private String permission;

}
