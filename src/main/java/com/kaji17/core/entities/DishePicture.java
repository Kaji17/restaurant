package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

/**
 * @author katina
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
@Entity
@Table(name = "dishepicture")
public class DishePicture implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dishepictureid", nullable = false, unique = true, updatable = false)
    private Integer dishepictureid;

    @Column(name = "url", nullable = false)
    private String url;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date")
    @JsonIgnore
    private Date date;

    @ManyToOne
    @JoinColumn(name = "disheid", referencedColumnName = "disheid",nullable = false, insertable = false, updatable = false)
    @JsonIgnore
    private Dishe dishe;
}
