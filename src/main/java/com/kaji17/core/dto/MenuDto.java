package com.kaji17.core.dto;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MenuDto {
    private String description;
    private String name;
    private double amount;
}
