package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

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
@Table(name = "menucontent",uniqueConstraints = @UniqueConstraint(columnNames = {"disheid", "menuid"}))
public class MenuContent implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    @JsonIgnore
    private MenuContentId id;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "menuid",referencedColumnName = "menuid", nullable = false, insertable = false, updatable = false)
    @JsonIgnore
    @ToString.Exclude
    private Menu menu;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "disheid",referencedColumnName = "disheid", nullable = false, insertable = false, updatable = false)
    private Dishe dishe;

}
