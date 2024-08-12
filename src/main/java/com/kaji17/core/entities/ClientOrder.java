package com.kaji17.core.entities;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;
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
@Table(name = "clientorder")
public class ClientOrder implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clientorderid", nullable = false, unique = true, updatable = false)
    private Integer clientorderid;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "customerid")
    private Customer customer;

    @OneToMany(mappedBy = "clientorder")
    @ToString.Exclude
    private List<ProductLine> productLines;

    @Column(name = "status")
    private String status;

}
