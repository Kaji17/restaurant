package com.kaji17.core.logics;

import com.kaji17.core.entities.DisheCategory;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;

/**
 * @author katina
 */
public interface CategoryDisheLogic {
    /**
     * Adds a new dish category to the database.
     *
     * @param categoriedishelibelle the name of the new dish category
     * @return the newly created dish category
     * @throws ResourceAlreadyExistsException if a category with the same name already exists
     * @throws InternalServerException if an error occurs during the creation process
     */
    DisheCategory addCategoryDishe(String categoriedishelibelle, String categoryimage);

    /**
     * This method retrieves the list of dish categories from the database.
     * It supports pagination if the 'pagination' parameter is set to true.
     *
     * @param pagination  A boolean value indicating whether to use pagination.
     * @param page         The page number to retrieve.
     * @param size         The number of items per page.
     * @return A list of dish categories, or all dish categories if pagination is not used.
     * @throws InternalServerException If an error occurs during the retrieval process.
     */
    Object getCategoryDishe(Boolean pagination, Integer page, Integer size);

    /**
     * Deletes a dish category by its ID.
     *
     * @param categoriedishid the ID of the dish category to be deleted
     * @throws ResourceNotFoundException if the dish category with the given ID does not exist
     * @throws InternalServerException if an error occurs during the deletion process
     */
    void deleteDishCategory(Integer categoriedishid);
}
