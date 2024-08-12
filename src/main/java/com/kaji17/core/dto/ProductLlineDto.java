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
public class ProductLlineDto {

    @NonNull
    private Integer menuid;

    @NonNull
    private Integer quantity;
}
