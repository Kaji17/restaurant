package com.kaji17.core.dto;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {

    private String lastname;

    @NonNull
    private String firstname;

    @NonNull
    private String email;

    @NonNull
    private String password;

    @NonNull
    private String phone;

    @NonNull
    private String adresse;
}
