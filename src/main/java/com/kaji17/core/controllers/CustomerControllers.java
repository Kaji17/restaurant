package com.kaji17.core.controllers;

import com.kaji17.core.dto.CustomerDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.logics.CustomerLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

/**
 * @author katina
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/customer")
public class CustomerControllers {

    private final CustomerLogic customerLogic;

    /**
     * This method is responsible for registering a new customer. It takes a {@link CustomerDto} object as input,
     * creates a new customer using the provided data, and returns the newly created customer along with its ID in the response.
     *
     * @param customerdto The {@link CustomerDto} object containing the customer's data.
     * @return A {@link ResponseEntity} containing the newly created customer and its ID in the location header.
     */
    @Operation(summary = "Enregistrement d'un client")
    @PostMapping(value = "/register-customer")
    public ResponseEntity<Customer> addCustomer(@RequestBody CustomerDto customerdto){
        log.warn("[*] Starting menu creating :: menudto = {}", customerdto);
        Customer createCustomer =customerLogic.createCustomer(customerdto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/find-customer/{customerid}").buildAndExpand(createCustomer.getCustomerid()).toUri();
        return ResponseEntity.created(location).body(createCustomer);
    }

    /**
     * This method is responsible for retrieving a list of all customers. It takes three parameters:
     * 1. pagination: A boolean value that determines whether to include pagination in the response. Defaults to true.
     * 2. page: An integer value representing the page number of the results. Defaults to 0.
     * 3. size: An integer value representing the number of results per page. Defaults to 10.
     * The method returns a {@link ResponseEntity} containing the list of customers as the body, with a status code of 200 (OK).
     */
    @Operation(summary = "Obtenir la liste de tous les clients")
    @GetMapping(value = "/get-customer")
    public ResponseEntity<Object> getAllCustomer(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting menu ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(customerLogic.getCustomer(pagination, page, size));
    }

    /**
     * This method is responsible for retrieving a single customer by their ID. It takes the customer's ID as a path variable.
     * The method returns a {@link ResponseEntity} containing the found customer as the body, with a status code of 200 (OK) if the customer is found,
     * or a status code of 404 (Not Found) if the customer is not found.
     *
     * @param customerid The ID of the customer to be retrieved.
     * @return A {@link ResponseEntity} containing the found customer or a 404 status code if the customer is not found.
     */
    @Operation(summary = "Obtenir un client client par son id")
    @GetMapping(value = "/find-customer/{customerid}")
    public ResponseEntity<Customer> findCustomerById(
            @PathVariable Integer customerid) {
        log.warn("[*] Starting getting one customer ::customerid={}", customerid);
        return ResponseEntity.ok().body(customerLogic.findCustomerById(customerid));
    }

    /**
     * This method is responsible for authenticating a customer by their login credentials. It takes a {@link LoginDto} object as input,
     * validates the provided credentials, and returns the authenticated customer along with their details in the response.
     *
     * @param loginDto The {@link LoginDto} object containing the customer's login credentials.
     * @return A {@link ResponseEntity} containing the authenticated customer and their details in the body, with a status code of 200 (OK) if the customer is authenticated,
     * or a status code of 401 (Unauthorized) if the credentials are invalid.
     */
    @Operation(summary = "connexion d'un client")
    @PostMapping(value = "/signin-customer")
    public ResponseEntity<Customer> signinCustomer(@RequestBody LoginDto loginDto){
        log.warn("[*] Starting login customer :: loginDto = {}", loginDto);
        return ResponseEntity.ok().body(customerLogic.signinCustomer(loginDto));
    }

}
