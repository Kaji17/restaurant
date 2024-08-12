package com.kaji17.core.logics;

import com.kaji17.core.dto.OrderDto;
import com.kaji17.core.entities.ClientOrder;
import com.kaji17.core.entities.Menu;

public interface OrderLogic {
    ClientOrder createOrder(OrderDto menudto);

    Object getOrders(Boolean pagination, Integer page, Integer size, Boolean status);

    ClientOrder updateOrders(Integer orderid, String status);

    void cancelOrder(Integer orderid);
}
