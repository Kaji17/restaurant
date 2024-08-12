package com.kaji17.core.entities;

import java.util.List;

/**
 * @author Katina
 */
public enum Statut {
    PENDING("EN ATTENTE"),
    DELIVRED("LIVRER"),
    CANCELED("ANNULER"),
    INPROGRESS("EN PREPARATION");
    private final String libelle;

    Statut(String libelle) {
        this.libelle = libelle;
    }
    public String getLibelle() {
        return libelle;
    }

    public static List<String> getAllStatus() {
        return List.of(
                "EN ATTENTE",
                "LIVRER",
                "ANNULER",
                "EN PREPARATION"
        );
    }


}
