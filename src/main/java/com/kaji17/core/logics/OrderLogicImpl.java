package com.kaji17.core.logics;

import com.kaji17.core.dao.*;
import com.kaji17.core.dto.OrderDto;
import com.kaji17.core.dto.ProductLlineDto;
import com.kaji17.core.entities.*;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import com.kaji17.core.tools.DateTools;
import com.kaji17.core.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * @author katina
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class OrderLogicImpl implements OrderLogic {
    private final ObjectsValidator<OrderDto> validatorOrderDto;
    private final CustomerDao customerDao;
    private final MenuContentDao menuContentDao;
    private final MenuDao menuDao;
    private final DateTools dateTools;
    private final ClientOrderDao clientOrderDao;
    private final ProductLineDao productLineDao;

    @Override
    public ClientOrder createOrder(OrderDto orderDto) {
        validatorOrderDto.validate(orderDto);

        Customer customerById = customerDao.findByCustomerid(orderDto.getCustomerid());
        ClientOrder clientOrder = new ClientOrder();

        List<ProductLine> productLinesTab = new ArrayList<>();
        try {
            clientOrder.setCustomer(customerById);
            clientOrder.setStatus(Statut.PENDING.getLibelle());
            clientOrder.setProductLines(null);
            clientOrder.setDate(dateTools.getCurrentDateInTimestamp());

            clientOrder = clientOrderDao.save(clientOrder);

            log.info("Order created with success {}", clientOrder);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'initialisation de la commande :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'initialisation de la commande");
        }

        if (Objects.isNull(customerById))
            throw new ResourceNotFoundException("Aucun client trouvé veuillez d'abord vous enregistrer");

        for (ProductLlineDto element : orderDto.getProductLlines()) {
            log.trace("productline: {}", element);
            ProductLine productLine = new ProductLine();
            Menu menuId = menuDao.findByMenuid(element.getMenuid());
            double productlinePrice = 0;
            List<MenuContent> menuContent = menuContentDao.findByMenu(menuId);
            if (menuContent != null) {
                for (MenuContent content : menuContent) {
                    log.trace("menu content: {}", content);
                    productlinePrice += content.getDishe().getAmount();
                }
            }
            log.info("menu price: {}", productlinePrice);
            productLine.setAmount(productlinePrice);
            productLine.setMenu(menuId);
            productLine.setQuantity(element.getQuantity());
            productLine.setClientorder(clientOrder);
            try {
                ProductLine result = productLineDao.save(productLine);
                log.trace("Product line saved successfully {}", result);
                productLinesTab.add(result);
            } catch (Exception e) {
                log.error("Une erreur s'est produite lors de l'ajout d'une de commande :: error={}", e.getMessage());
                throw new InternalServerException("Une erreur s'est produite lors de  l'ajout d'une de commande");
            }
        }
        clientOrder.setProductLines(productLinesTab);
        try {
            return clientOrderDao.save(clientOrder);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'ajout de la commande :: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'ajout de la commande");
        }
    }

    @Override
    public Object getOrders(Boolean pagination, Integer page, Integer size, Boolean status) {
        try {
            if (Boolean.TRUE.equals(pagination)) {
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting order whith pagination ");
                return clientOrderDao.findAll(pageable);
            } else {
                log.debug("Getting order whitout  pagination ");
                return clientOrderDao.findAll();
            }
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la récupération des commandes :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération de la liste des commandes");
        }
    }

    @Override
    public ClientOrder updateOrders(Integer orderid, String status) {
        ClientOrder clientOrderById = clientOrderDao.findByClientorderid(orderid);

        if (Objects.isNull(clientOrderById))
            throw new ResourceNotFoundException("Aucune commande trouvée");
        try {
            clientOrderById.setStatus(status);
            ClientOrder result = clientOrderDao.save(clientOrderById);
            log.info("Canceled Order successfully {}", result);
            return result;
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la récupération de l'annulation de la commande :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'annulation de la commande");
        }
    }

    @Override
    public void cancelOrder(Integer orderid) {
        ClientOrder clientOrderById = clientOrderDao.findByClientorderid(orderid);

        if (Objects.isNull(clientOrderById))
            throw new ResourceNotFoundException("Aucune commande trouvée");

        if (!Objects.equals(clientOrderById.getStatus(), Statut.DELIVRED.getLibelle()) || !Objects.equals(clientOrderById.getStatus(), Statut.CANCELED.getLibelle())) {
            clientOrderById.setStatus(Statut.CANCELED.getLibelle());
            try {
                ClientOrder result = clientOrderDao.save(clientOrderById);
                log.info("Canceled Order successfully {}", result);
            } catch (Exception e) {
                log.error("Une erreur s'est produite lors de la récupération de l'annulation de la commande :: errror: {}", e.getMessage());
                throw new InternalServerException("Une erreur s'est produite lors de l'annulation de la commande");
            }
        }
    }
}
