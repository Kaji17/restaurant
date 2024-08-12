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
public class AdministratorInfoDto {

    private String lastname;

    private String firstname;

    private String email;

    private String permission;
}
