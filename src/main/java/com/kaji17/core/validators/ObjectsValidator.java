package com.kaji17.core.validators;

import com.kaji17.core.exceptions.BadRequestException;
import jakarta.validation.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Component
@Slf4j
public class ObjectsValidator<T> {

    private  final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    public void validate(T objectToValidate) {
        Set<ConstraintViolation<T>> violations = validator.validate(objectToValidate);
        if(!violations.isEmpty()) {
            log.warn("Parametre(s) invalide(s) :: values = {} ", violations.stream().map(ConstraintViolation::getMessage).collect(Collectors.toSet()));
            throw new ConstraintViolationException(violations);
        }
    }


    /**
     * @author katina
     * This method is used to validate an email address.
     *
     * @param email the email address to be validated
     * @return true if the email address is valid, false otherwise
     */
    public Boolean isValideEmail(String email){
        String regex = "^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);
        log.info("Valide email :: {}", matcher.matches());

        return matcher.matches();
    }

    /**
     * This method is used to validate a number.
     *
     * @param number the number to be validated
     * @return true if the number is valid, false otherwise
     */
    public Boolean isValideNumber(String number){
        String regex = "\\d+";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(number);
        log.info("Valide numero :: {}", matcher.matches());
        return matcher.matches();
    }

    public void isValideCode(String code){
        String regex = "^[A-Za-z]{3}\\d+$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(code);
        if (!matcher.matches()) throw new BadRequestException("Caractère de code invalide. Exemple = AZW12");
    }


    /**
     * This method is used to validate the number of failed login attempts within a 5-minute window.
     *
     * @param lockdate the date and time when the last failed login attempt occurred
     * @throws BadRequestException if the number of failed login attempts within the last 5 minutes exceeds the maximum allowed
     * @author Katina
     */
    public void validateTryConnexion(Date lockdate){
        if(lockdate!= null){
            Date date = new Date();
            if(date.getTime() - lockdate.getTime() < 300000){
                throw new BadRequestException("il semble que vous ayez dépassé le nombre maximum de tentatives de connexion autorisées. Veuillez patienter 5 minutes");
            }
        }
    }
}
