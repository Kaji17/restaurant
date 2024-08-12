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
public class ProductLlineDto {

    @NonNull
    private Integer menuid;

    @NonNull
    private Integer quantity;
}
