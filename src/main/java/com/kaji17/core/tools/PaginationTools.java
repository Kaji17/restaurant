package com.kaji17.core.tools;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @author katina
 * @version 1.17
 */
@Component
@Slf4j
public class PaginationTools<T> {

    /**
     * fonction servant à faire la pagination des listes
     *
     * @param list la liste qu'on souhaite paginé
     * @param pagination spécifie oui ou non qu'on paginé la liste
     * @param page le numéro de la page
     * @param size le nombre d'élément qu'on souhaite sur la page
     * @return Object l'objet contiendra la liste avec les informations de paginantion
     */
    public Object pagination(List<T> list, Boolean pagination, Integer page, Integer size){

        if(Boolean.TRUE.equals(pagination) && page != null && size != null){
            Pageable pageable =  PageRequest.of(page, size);
            int start = (int) pageable.getOffset();
            int end = Math.min((start + pageable.getPageSize()), list.size());
            if(start > list.size()) {
                return new PageImpl<>(new ArrayList<>(), pageable, list.size());
            }else {
                return new PageImpl<>(list.subList(start, end), pageable, list.size());
            }
        }else {
            return list;
        }
    }
}
