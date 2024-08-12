package com.kaji17.core.controllers;

import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.dto.OrderDto;
import com.kaji17.core.entities.ClientOrder;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.Statut;
import com.kaji17.core.logics.MenuLogic;
import com.kaji17.core.logics.OrderLogic;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping(value ="api/v1/restaurant/order")
public class OrderControllers {

    private final OrderLogic orderLogic;
    @Operation(summary = "Créer une commande")
    @PostMapping(value = "/create-order")
    public ResponseEntity<ClientOrder> addOrder(@RequestBody OrderDto orderdto){
        log.warn("[*] Starting order creating :: orderdto = {}", orderdto);
        return ResponseEntity.ok().body(orderLogic.createOrder(orderdto));
    }

    @Operation(summary = "Annuler une commande")
    @PostMapping(value = "/cancel-order/{orderid}")
    public ResponseEntity<Void> cancelOrder(@PathVariable Integer orderid){
        log.warn("[*] Starting order canceling :: orderid = {}", orderid);
        orderLogic.cancelOrder(orderid);
        return ResponseEntity.ok().build();
    }

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

    @Operation(summary = "Obtenir la liste de tous les status de commandes")
    @GetMapping(value = "/get-order/status")
    public ResponseEntity<Object> getAllOrdersStatus() {
        log.warn("[*] Starting getting order status ");
        return ResponseEntity.ok().body(Statut.getAllStatus());
    }

    @Operation(summary = "Modifier une commande")
    @PutMapping(value = "/update-order/{orderid}")
    public ResponseEntity<ClientOrder> updateOrder(@RequestParam String status, @PathVariable Integer orderid) {
        log.warn("[*] Starting updating menu :: status = {}, orderid={}", status,orderid);
        return ResponseEntity.ok().body(orderLogic.updateOrders(orderid,status));
    }
}
