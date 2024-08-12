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
public class LoginDto {

    private String email;

    private String password;
}
