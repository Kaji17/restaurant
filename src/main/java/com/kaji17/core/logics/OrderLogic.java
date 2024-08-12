package com.kaji17.core.logics;

import com.kaji17.core.dto.OrderDto;
import com.kaji17.core.entities.ClientOrder;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.ProductLine;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceNotFoundException;

/**
 * @author katina
 */
public interface OrderLogic {
    /**
     This method is responsible for creating a new order. It takes an {@link OrderDto} as input, validates it, and then creates a new {@link ClientOrder} entity. It also populates the {@link ProductLine} entities for the products included in the order.
     @param menudto The {@link OrderDto} containing the details of the new order.
     @return The newly created {@link ClientOrder} entity.
     @throws InternalServerException If an error occurs during the creation of the order or the addition of its product lines.
     @throws ResourceNotFoundException If no customer is found with the provided customer ID.
     */
    ClientOrder createOrder(OrderDto menudto);

    /**
     * This method retrieves the list of orders from the database.
     * It supports pagination and filtering by status.
     *
     * @param pagination  A boolean flag indicating whether to use pagination.
     * @param page        The page number to retrieve.
     * @param size        The number of records per page.
     * @param status       The status of the orders to retrieve.
     * @return A list of orders or a Pageable list of orders based on the pagination flag.
     * @throws InternalServerException If an error occurs during the retrieval process.
     */
    Object getOrders(Boolean pagination, Integer page, Integer size, Boolean status);

    /**
     * Updates the status of a specific order.
     *
     * @param orderid The unique identifier of the order to be updated.
     * @param status  The new status of the order.
     * @return The updated order object.
     * @throws ResourceNotFoundException If no order is found with the given order id.
     * @throws InternalServerException If an error occurs during the update process.
     */
    ClientOrder updateOrders(Integer orderid, String status);

    /**
     Cancels an existing order by its id.
     @param orderid the id of the order to be canceled
     @throws ResourceNotFoundException if the order with the given id is not found
     @throws InternalServerException if an error occurs during the cancellation process
     */
    void cancelOrder(Integer orderid);
}
