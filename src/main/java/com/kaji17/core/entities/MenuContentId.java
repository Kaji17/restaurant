package com.kaji17.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MenuContentId implements Serializable {
    @Column(name = "menuid", nullable = false, insertable=false, updatable=false)
    private Integer menuid;

    @Column(name = "disheid", nullable = false, insertable=false, updatable=false)
    private Integer disheid;

    public boolean equals(Object other) {
        if ((this == other))
            return true;
        if ((other == null))
            return false;
        if (!(other instanceof MenuContentId castOther))
            return false;

        return (Objects.equals(this.getDisheid(), castOther.getDisheid()))
                && (Objects.equals(this.getMenuid(), castOther.getMenuid()));
    }

    public int hashCode() {
        final int prime = 31;
        int hash = 17;

        hash = hash * prime + this.getDisheid();
        hash = hash * prime + this.getMenuid();
        return hash;
    }
}
