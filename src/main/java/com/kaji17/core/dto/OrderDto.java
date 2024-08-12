package com.kaji17.core.dto;

import com.kaji17.core.entities.Menu;
import lombok.*;

import java.util.List;

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
