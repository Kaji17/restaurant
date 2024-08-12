package com.kaji17.core.logics;

import com.kaji17.core.dto.CustomerDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import jakarta.security.auth.message.AuthException;

/**
 * @author katina
 */
public interface CustomerLogic {

    /**
     * This method is responsible for creating a new customer in the system.
     * It validates the provided customer data, checks for existing email and phone number,
     * and then creates a new customer entity with encrypted password.
     *
     * @param customerdto The customer data to be created.
     * @return The newly created customer entity.
     * @throws ResourceAlreadyExistsException if the provided email or phone number already exists.
     * @throws BadRequestException if the phone number contains non-numeric characters.
     * @throws InternalServerException if an unexpected error occurs during the creation process.
     */
    Customer createCustomer(CustomerDto customerdto);

    /**
     * This method retrieves a list of customers from the database.
     * It supports pagination by accepting parameters for page and size.
     * If pagination is enabled, it returns a {@link Object} of customers with the specified page and size.
     * If pagination is disabled, it returns all customers in the database.
     *
     * @param pagination  A boolean value indicating whether to enable pagination.
     * @param page         The page number to retrieve.
     * @param size         The number of customers to retrieve per page.
     * @return A {@link Object} of customers if pagination is enabled, otherwise, all customers in the database.
     * @throws InternalServerException If an error occurs during the retrieval process.
     */
    Object getCustomer(Boolean pagination, Integer page, Integer size);

    /**
     This method is used to sign in a customer by verifying their email and password.
     @param loginDto The LoginDto object containing the customer's email and password.
     @return The Customer object if the login credentials are valid, otherwise throws an AuthException.
     @throws AuthException If the email format is invalid, the customer is not found, or the password is incorrect.
     */
    Customer signinCustomer(LoginDto loginDto);

    /**
     * This method is used to find a customer by their unique identifier.
     *
     * @param customerid The unique identifier of the customer to be found.
     * @return The customer object if found, otherwise null.
     * @throws ResourceNotFoundException If the customer with the given id is not found in the database.
     */
    Customer findCustomerById(Integer customerid);
}
