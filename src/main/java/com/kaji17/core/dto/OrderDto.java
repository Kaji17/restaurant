package com.kaji17.core.dto;

import lombok.*;

import java.util.List;

/**
 * @author katina
 */
@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    @NonNull
    private Integer customerid;

    @NonNull
    private List<ProductLlineDto> productLlines;
}
