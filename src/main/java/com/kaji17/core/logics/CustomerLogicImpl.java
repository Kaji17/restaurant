package com.kaji17.core.logics;

import com.kaji17.core.dao.CustomerDao;
import com.kaji17.core.dto.CustomerDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import com.kaji17.core.tools.EncryptTools;
import com.kaji17.core.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * @author katina
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerLogicImpl implements CustomerLogic{

    private final ObjectsValidator<CustomerDto> validatorCustomerDto;

    private final CustomerDao customerDao;

    private final EncryptTools encryptTools;

    @Override
    public Customer createCustomer(CustomerDto customerdto) {
        log.trace("Customerdto object: {}", customerdto);
        // Checking the customerDto object
        validatorCustomerDto.validate(customerdto);

        // Checking if the customer's email is already registered in database
        if (Objects.nonNull(customerDao.findByEmail(customerdto.getEmail())))
            throw new ResourceAlreadyExistsException("L'email est déjà utilisée");

        // Checking if the customer's number phone is already registered in database
        if (Objects.nonNull(customerDao.findByPhone(customerdto.getPhone())))
            throw new ResourceAlreadyExistsException("Ce numéro de téléphone est déjà utilisé");

        if (Boolean.FALSE.equals(validatorCustomerDto.isValideEmail(customerdto.getEmail())))
            throw new BadRequestException("Veuillez saisir un email valide");

        // Checking the customer's phone number if the content contains only numbers
        if(Boolean.FALSE.equals(validatorCustomerDto.isValideNumber(customerdto.getPhone())))
            throw new BadRequestException("Le numéro de téléphone doit contenir que des chiffres");

        Customer customer = new Customer();
        customer.setLastname(customerdto.getLastname());
        customer.setFirstname(customerdto.getFirstname());
        customer.setEmail(customerdto.getEmail());
        customer.setPhone(customerdto.getPhone());
        customer.setAdresse(customerdto.getAdresse());
        customer.setPassword(encryptTools.hashPassword(customerdto.getPassword()));

        try {
            Customer resultat = customerDao.save(customer);
            log.info("[*] Registration exited with Successfully");
            log.trace("New Customer : {}",resultat);
            return resultat;
        }catch (Exception e){
            log.error("Une erreur s'est produite lors de la création du client :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la création du client");
        }
    }

    @Override
    public Object getCustomer(Boolean pagination, Integer page, Integer size) {
        try {
            if (Boolean.TRUE.equals(pagination)){
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting Customer whith pagination ");
                return customerDao.findAll(pageable);
            }else {
                log.debug("Getting Customer whitout  pagination ");
                return customerDao.findAll();
            }
        }catch (Exception e){
            log.error("ne erreur s'est produite lors de la récupération des clients :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération de la liste des clients");
        }
    }

    @Override
    public Customer signinCustomer(LoginDto loginDto) {
        // Vérifying email format
        if (Boolean.FALSE.equals(validatorCustomerDto.isValideEmail(loginDto.getEmail())))
            throw new BadRequestException("Veuillez saisir un email valide");

        Customer customerByEmail = customerDao.findByEmail(loginDto.getEmail());

        if (Objects.isNull(customerByEmail))
            throw new ResourceNotFoundException("Nous n'avons pas pu retrouver l'utilisateur avec l'email : "+ loginDto.getEmail());

        if (!encryptTools.checkPassword(loginDto.getPassword(),customerByEmail.getPassword()))
            throw new ResourceNotFoundException("Mot de passe incorrect.");

        return customerByEmail;
    }

    @Override
    public Customer findCustomerById(Integer customerid) {
        return customerDao.findByCustomerid(customerid);
    }
}
