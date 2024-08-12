package com.kaji17.core.controllers;

import com.kaji17.core.dto.CustomerDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.logics.CustomerLogic;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/customer")
public class CustomerControllers {

    private final CustomerLogic customerLogic;
    @Operation(summary = "Enregistrement d'un client")
    @PostMapping(value = "/register-customer")
    public ResponseEntity<Customer> addCustomer(@RequestBody CustomerDto customerdto){
        log.warn("[*] Starting menu creating :: menudto = {}", customerdto);
        Customer createCustomer =customerLogic.createCustomer(customerdto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/find-customer/{customerid}").buildAndExpand(createCustomer.getCustomerid()).toUri();
        return ResponseEntity.created(location).body(createCustomer);
    }

    @Operation(summary = "Obtenir la liste de tous les clients")
    @GetMapping(value = "/get-customer")
    public ResponseEntity<Object> getAllCustomer(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting menu ::pagination={}, page={}, size={}", pagination, page, size);
        return ResponseEntity.ok().body(customerLogic.getCustomer(pagination, page, size));
    }

    @Operation(summary = "Obtenir un client client par son id")
    @GetMapping(value = "/find-customer/{customerid}")
    public ResponseEntity<Customer> findCustomerById(
            @PathVariable Integer customerid) {
        log.warn("[*] Starting getting one customer ::customerid={}", customerid);
        return ResponseEntity.ok().body(customerLogic.findCustomerById(customerid));
    }

    @Operation(summary = "connexion d'un client")
    @PostMapping(value = "/signin-customer")
    public ResponseEntity<Customer> signinCustomer(@RequestBody LoginDto loginDto){
        log.warn("[*] Starting login customer :: loginDto = {}", loginDto);
        return ResponseEntity.ok().body(customerLogic.signinCustomer(loginDto));
    }

}
