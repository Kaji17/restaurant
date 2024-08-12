package com.kaji17.core.dto;

import lombok.*;

/**
 * @author katina
 */
@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DisheDto {

    private String description;

    @NonNull
    private String name;

    private double amount;

    private Integer dishecategoryid;
}
