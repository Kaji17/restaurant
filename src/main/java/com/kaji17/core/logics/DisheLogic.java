package com.kaji17.core.logics;

import com.kaji17.core.dto.DisheDto;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author katina
 */
public interface DisheLogic {
    /**
     This method retrieves a list of dishes from the database. If pagination is requested, the method will return a list of dishes with the specified page and size. If no pagination is requested, the method will return all dishes in the database.
     @param pagination A boolean value indicating whether pagination is required.
     @param page The page number of the list of dishes to be returned.
     @param size The number of dishes to be returned per page.
     @return A list of dishes from the database.
     @throws InternalServerException If an error occurs during the retrieval of the list of dishes.
     */
    Object getDishes(Boolean pagination, Integer page, Integer size);

    /**
     Deletes a dish from the database by its id.
     @param dishid the id of the dish to be deleted
     @throws ResourceNotFoundException if the dish with the given id does not exist
     @throws InternalServerException if an error occurs during the deletion process
     */
    void deleteDishe(Integer dishid);

    /**
     * Adds a new dish to the database.
     *
     * @param dishdto The JSON string representing the dish details.
     * @param images        The images of the dish as MultipartFile array.
     * @return The newly added dish.
     * @throws BadRequestException If the JSON string cannot be converted to a valid dish object.
     * @throws ResourceAlreadyExistsException If a dish with the same name already exists.
     * @throws InternalServerException If an error occurs while processing the request.
     */
    Dishe addDishe(String dishdto, MultipartFile[] images);

    /**
     Updates an existing dish with the provided dishDto and dishId.
     @param dishid the id of the dish to be updated
     @param dishedto the updated details of the dish
     @return the updated dish
     @throws ResourceNotFoundException if the dish with the given id does not exist
     @throws ResourceAlreadyExistsException if a dish with the same name already exists
     @throws InternalServerException if an error occurs during the update process
     */
    Dishe updateDishe(Integer dishid, DisheDto dishedto);
}
