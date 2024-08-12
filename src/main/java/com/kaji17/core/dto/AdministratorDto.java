package com.kaji17.core.dto;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AdministratorDto {

    private String lastname;

    private String firstname;

    @NonNull
    private String email;

    @NonNull
    private String password;

    private String permission;
}
