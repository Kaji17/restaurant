package com.kaji17.core.controllers;

import com.kaji17.core.dto.OrderDto;
import com.kaji17.core.entities.ClientOrder;
import com.kaji17.core.entities.Statut;
import com.kaji17.core.logics.OrderLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author katina
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/order")
public class OrderControllers {

    private final OrderLogic orderLogic;

    /**
     * This method is used to create a new order.
     * It takes an {@link OrderDto} object as input, which contains the details of the order to be created.
     * The method then calls the {@link OrderLogic#createOrder(OrderDto)} method to create the order and returns the created order wrapped in a {@link ResponseEntity} with status code 200 (OK).
     *
     * @param orderdto the {@link OrderDto} object containing the details of the order to be created
     * @return a {@link ResponseEntity} containing the created order wrapped in a {@link ClientOrder} object
     */
    @Operation(summary = "Créer une commande")
    @PostMapping(value = "/create-order")
    public ResponseEntity<ClientOrder> addOrder(@RequestBody OrderDto orderdto){
        log.warn("[*] Starting order creating :: orderdto = {}", orderdto);
        return ResponseEntity.ok().body(orderLogic.createOrder(orderdto));
    }

    /**
     * This method is used to cancel an existing order.
     * It takes the ID of the order to be cancelled as a parameter.
     * The method then calls the {@link OrderLogic#cancelOrder(Integer)} method to cancel the order and returns a {@link ResponseEntity} with status code 200 (OK) to indicate the successful cancellation.
     *
     * @param orderid the ID of the order to be cancelled
     * @return a {@link ResponseEntity} containing a void response to indicate the successful cancellation of the order
     */
    @Operation(summary = "Annuler une commande")
    @PostMapping(value = "/cancel-order/{orderid}")
    public ResponseEntity<Void> cancelOrder(@PathVariable Integer orderid){
        log.warn("[*] Starting order canceling :: orderid = {}", orderid);
        orderLogic.cancelOrder(orderid);
        return ResponseEntity.ok().build();
    }

    /**
     * This method is used to retrieve a list of all orders.
     * It takes optional parameters for pagination, status, page number, and size of the result set.
     * The method then calls the {@link OrderLogic#getOrders(Boolean, Integer, Integer, Boolean)} method to retrieve the list of orders based on the provided parameters and returns the list wrapped in a {@link ResponseEntity} with status code 200 (OK).
     *
     * @param pagination a boolean value indicating whether to include pagination in the response. Defaults to true.
     * @param status a boolean value indicating whether to filter orders by status. Defaults to false.
     * @param page the page number of the result set. Defaults to 0.
     * @param size the size of the result set. Defaults to 10.
     * @return a {@link ResponseEntity} containing the list of orders wrapped in an {@link Object}
     */
    @Operation(summary = "Obtenir la liste de toutes les commandes")
    @GetMapping(value = "/get-order")
    public ResponseEntity<Object> getAllOrders(
            @RequestParam(defaultValue = "true") Boolean pagination,
            @RequestParam(required = false) Boolean status,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {
        log.warn("[*] Starting getting menu ::pagination={}, page={}, size={}, status={}", pagination, page, size,status);
        return ResponseEntity.ok().body(orderLogic.getOrders(pagination, page, size,status));
    }

    /**
     * This method is used to retrieve a list of all status of orders.
     * It does not take any parameters and simply returns a list of all possible statuses for orders.
     * The method returns a {@link ResponseEntity} containing the list of statuses wrapped in an {@link Object}.
     *
     * @return a {@link ResponseEntity} containing the list of statuses wrapped in an {@link Object}
     */
    @Operation(summary = "Obtenir la liste de tous les status de commandes")
    @GetMapping(value = "/get-order/status")
    public ResponseEntity<Object> getAllOrdersStatus() {
        log.warn("[*] Starting getting order status ");
        return ResponseEntity.ok().body(Statut.getAllStatus());
    }

    /**
     * This method is used to update an existing order.
     * It takes the ID of the order to be updated and the new status of the order as parameters.
     * The method then calls the {@link OrderLogic#updateOrders(Integer, String)} method to update the order with the new status and returns the updated order wrapped in a {@link ResponseEntity} with status code 200 (OK).
     *
     * @param status the new status of the order to be updated
     * @param orderid the ID of the order to be updated
     * @return a {@link ResponseEntity} containing the updated order wrapped in a {@link ClientOrder} object
     */
    @Operation(summary = "Modifier une commande")
    @PutMapping(value = "/update-order/{orderid}")
    public ResponseEntity<ClientOrder> updateOrder(@RequestParam String status, @PathVariable Integer orderid) {
        log.warn("[*] Starting updating menu :: status = {}, orderid={}", status,orderid);
        return ResponseEntity.ok().body(orderLogic.updateOrders(orderid,status));
    }
}
