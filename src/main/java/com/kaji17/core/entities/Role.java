package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name = "role")
public class Role implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roleid", nullable = false, unique = true, updatable = false)
    private Integer roleid;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "role")
    @JsonIgnore
    @ToString.Exclude
    private List<Administrator> administrator;

}
