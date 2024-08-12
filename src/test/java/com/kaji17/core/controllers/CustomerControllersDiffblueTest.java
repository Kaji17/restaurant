package com.kaji17.core.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kaji17.core.dto.CustomerDto;
import com.kaji17.core.dto.LoginDto;
import com.kaji17.core.entities.Customer;
import com.kaji17.core.logics.CustomerLogic;
import com.kaji17.core.tools.EncryptTools;
import lombok.extern.slf4j.Slf4j;
import org.fusesource.jansi.Ansi;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.fusesource.jansi.AnsiConsole;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@Slf4j
class CustomerControllersDiffblueTest {
    @InjectMocks
    private CustomerControllers customerControllers;

    @Mock
    private CustomerLogic customerLogic;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(customerControllers).build();
    }

    /**
     * Method under test: {@link CustomerControllers#addCustomer(CustomerDto)}
     */
    @Test
    void testAddNewCustomer() throws Exception {
        //Given
        CustomerDto customerDto = new CustomerDto();
        customerDto.setLastname("Doe");
        customerDto.setFirstname("John");
        customerDto.setEmail("johndoe@example.com");
        customerDto.setPhone("2250101010101");
        customerDto.setPassword("password");
        customerDto.setAdresse("Abidjan");


        Customer expectedCustomer = new Customer();
        expectedCustomer.setCustomerid(1);
        expectedCustomer.setLastname(customerDto.getLastname());
        expectedCustomer.setFirstname(customerDto.getFirstname());
        expectedCustomer.setEmail(customerDto.getEmail());
        expectedCustomer.setPhone(customerDto.getPhone());
        expectedCustomer.setPassword("$2a$12$kDBiEAYHZ04nLSTzCHaPsul8nMNAttxHUKU1nPngrT1i4LmKE76Fu");
        expectedCustomer.setAdresse("Abidjan");

        when(customerLogic.createCustomer(any(CustomerDto.class))).thenReturn(expectedCustomer);

        // When
        mockMvc.perform(post("http://localhost:8080/api/v1/restaurant/customer/register-customer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(customerDto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.lastname").value(expectedCustomer.getLastname()))
                .andExpect(jsonPath("$.firstname").value(expectedCustomer.getFirstname()))
                .andExpect(jsonPath("$.email").value(expectedCustomer.getEmail()))
                .andExpect(jsonPath("$.phone").value(expectedCustomer.getPhone()))
                .andExpect(jsonPath("$.adresse").value(expectedCustomer.getAdresse()))
                .andExpect(jsonPath("$.customerid").value(expectedCustomer.getCustomerid()));

        // Then
        AnsiConsole.out.println(Ansi.ansi().fg(Ansi.Color.GREEN).a("Test createCustomer passed!").reset());
    }

    /**
     * Method under test: {@link CustomerControllers#addSignin(LoginDto)}
     */
    @Test
    void testAddSignin() throws Exception {
        // Arrange
        Customer customer = new Customer();
        customer.setAdresse("Adresse");
        customer.setCustomerid(1);
        customer.setEmail("jane.doe@example.org");
        customer.setFirstname("Jane");
        customer.setLastname("Doe");
        customer.setPassword("$2a$12$kDBiEAYHZ04nLSTzCHaPsul8nMNAttxHUKU1nPngrT1i4LmKE76Fu");
        customer.setPhone("6625550144");

        LoginDto loginDto = new LoginDto();
        loginDto.setEmail("jane.doe@example.org");
        loginDto.setPassword("password");

        when(customerLogic.signinCustomer(any(LoginDto.class))).thenReturn(customer);

        mockMvc.perform(post("http://localhost:8080/api/v1/restaurant/customer/signin-customer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(loginDto)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content()
                        .string("{\"customerid\":1,\"lastname\":\"Doe\",\"firstname\":\"Jane\",\"email\":\"jane.doe@example.org\",\"phone\":\"6625550144"
                                        + "\",\"adresse\":\"Adresse\"}"));

        AnsiConsole.out.println(Ansi.ansi().fg(Ansi.Color.GREEN).a("Test login user passed!").reset());
    }

    /**
     * Method under test:
     * {@link CustomerControllers#getAllCustomer(Boolean, Integer, Integer)}
     */
    @Test
    void testGetAllCustomer() throws Exception {
        // Arrange
        when(customerLogic.getCustomer(Mockito.<Boolean>any(), Mockito.<Integer>any(), Mockito.<Integer>any()))
                .thenReturn("Customer");
        MockHttpServletRequestBuilder getResult = MockMvcRequestBuilders.get("/api/v1/restaurant/customer/get-customer");
        MockHttpServletRequestBuilder requestBuilder = getResult.param("pagination", String.valueOf(true));

        // Act and Assert
        MockMvcBuilders.standaloneSetup(customerControllers)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("text/plain;charset=ISO-8859-1"))
                .andExpect(MockMvcResultMatchers.content().string("Customer"));

        AnsiConsole.out.println(Ansi.ansi().fg(Ansi.Color.GREEN).a("Test getall user passed!").reset());

    }
}
