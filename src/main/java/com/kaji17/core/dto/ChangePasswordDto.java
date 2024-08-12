package com.kaji17.core.dto;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordDto {
    private String lastpassword;
    private String newpassword;
}
