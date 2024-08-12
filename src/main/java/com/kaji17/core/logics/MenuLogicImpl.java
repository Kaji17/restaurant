package com.kaji17.core.logics;

import com.kaji17.core.dao.DisheDao;
import com.kaji17.core.dao.MenuContentDao;
import com.kaji17.core.dao.MenuDao;
import com.kaji17.core.dto.MenuDto;
import com.kaji17.core.entities.Dishe;
import com.kaji17.core.entities.Menu;
import com.kaji17.core.entities.MenuContent;
import com.kaji17.core.entities.MenuContentId;
import com.kaji17.core.exceptions.InternalServerException;
import com.kaji17.core.exceptions.ResourceAlreadyExistsException;
import com.kaji17.core.exceptions.ResourceNotFoundException;
import com.kaji17.core.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

/**
 * @author katina
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class MenuLogicImpl implements MenuLogic {

    private final ObjectsValidator<MenuDto> validatorMenudto;

    private final MenuDao menuDao;
    private final DisheDao disheDao;
    private final MenuContentDao menuContentDao;

    @Override
    public Menu addMenu(MenuDto menudto) {
        validatorMenudto.validate(menudto);

        if (Objects.nonNull(menuDao.findByName(menudto.getName())))
            throw new ResourceAlreadyExistsException("Ce menu exite déjà.");

        Menu menu = new Menu();
        menu.setName(menudto.getName());
        menu.setDescription(menudto.getDescription());
        menu.setAmount(menudto.getAmount());
        try {
            Menu result = menuDao.save(menu);
            log.info("Saved menu successfully : {}", result);
            return result;
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'enregistrement du menu :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'enregistrement du menu");
        }
    }

    @Override
    public Object getMenus(Boolean pagination, Integer page, Integer size) {
        try {
            if (Boolean.TRUE.equals(pagination)) {
                Pageable pageable = PageRequest.of(page, size);
                log.debug("Getting menu whith pagination ");
                return menuDao.findAll(pageable);
            } else {
                log.debug("Getting menu whitout  pagination ");
                return menuDao.findAll();
            }
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la récupération du menu :: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la récupération du menus");
        }
    }

    @Override
    public Menu updateMenu(Integer menuid, MenuDto menudto) {
        validatorMenudto.validate(menudto);

        Menu menuByid = menuDao.findByMenuid(menuid);
        // Checking if the customer's email is already registered in database
        if (Objects.isNull(menuByid))
            throw new ResourceNotFoundException("Ce menu n'existe pas");

        Optional.of(menudto.getName()).ifPresent(name -> {
            Menu menuByName = menuDao.findByName(name);
            if (Objects.nonNull(menuByName))
                throw new ResourceAlreadyExistsException("Ce menu existe déjà");
            menuByid.setName(name);
        });
        Optional.ofNullable(menudto.getAmount()).ifPresent(menuByid::setAmount);
        Optional.ofNullable(menudto.getDescription()).ifPresent(menuByid::setDescription);

        try {
            log.info("Update menu exited susccess");
            return menuDao.save(menuByid);
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la modification du menu:: error={}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la mmodification du menu");
        }
    }

    @Override
    public void deleteMenu(Integer menuid) {
        Menu menuById = menuDao.findByMenuid(menuid);
        if (Objects.isNull(menuById))
            throw new ResourceNotFoundException("Ce menu n'existe pas");

        if (Objects.nonNull(menuById.getMenuContents())) {
            for (MenuContent menuContent : menuById.getMenuContents()){
                menuContentDao.delete(menuContent);
                log.debug("Deleting Menu content");
            }
        }
        try {
            menuDao.delete(menuById);
            log.info("Menu {} deleted with success", menuById.getName());
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de la supression du menu:: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de la suppression du menu");
        }
    }

    @Override
    public MenuContent assignDishToMenu(Integer dishid, Integer menuid) {
        Dishe disheById = disheDao.findByDisheid(dishid);

        if (Objects.isNull(disheById))
            throw new ResourceNotFoundException("Aucun plat trouvé");

        Menu menuById = menuDao.findByMenuid(menuid);

        if (Objects.isNull(menuById))
            throw new ResourceNotFoundException("Aucun menu trouvé");

        MenuContentId menuContentId = new MenuContentId(menuid, dishid);

        MenuContent menuContent = new MenuContent();

        menuContent.setId(menuContentId);
        menuContent.setDishe(disheById);
        menuContent.setMenu(menuById);
        try {
            MenuContent result = menuContentDao.save(menuContent);
            double menuRealPrice = 0;
            for (MenuContent child : result.getMenu().getMenuContents()) {
                menuRealPrice += child.getDishe().getAmount();
            }
            result.getMenu().setAmount(menuRealPrice);
            result = menuContentDao.save(menuContent);
            log.info("Saved menu content successfully : {}", result);
            return result;
        } catch (Exception e) {
            log.error("Une erreur s'est produite lors de l'assignation du menu au plat':: errror: {}", e.getMessage());
            throw new InternalServerException("Une erreur s'est produite lors de l'assignation du menu au plat");
        }
    }
}
