package com.kaji17.core.tools;

import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@Component
@Slf4j
public class DateTools {

    /**
     * @return the current date in timestamp
     */
    public Timestamp getCurrentDateInTimestamp() {
        Date today = new Date();
        return new Timestamp(today.getTime());
    }

    public Date convertDate(Date date) {

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String s = df.format(date);
        try {
            date = df.parse(s);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public Date convertDate2(Date date) {

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        String s = df.format(date);
        try {
            date = df.parse(s);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public Timestamp convertStringDateToTimestamp(String value) throws ParseException {
        String dateFormat = "";
        if (value.length() == 16) {
            dateFormat = "yyyy-MM-dd HH:mm";
        } else {
            dateFormat = "yyyy-MM-dd HH:mm:ss.SSS";
        }
        log.debug(" dateFormat " + dateFormat);


        SimpleDateFormat formatter6 = new SimpleDateFormat(dateFormat);
        Date date = formatter6.parse(value);
        return new Timestamp(date.getTime());

    }

    /**
     * permet de convertir une chaine de caractère de format: dd.MM.YYYY HH:MM en date Timestamp de format : yyyy-MM-dd HH:mm
     *
     * @param value la date en format chaine caractère
     * @return Timestamp
     * @author katina
     */
    public Timestamp convertCustomStringDateToTimestamp(String value) throws ParseException {
        if (value != null) {
            String dateFormat = "";

            String[] tabValue = value.split(" ");
            log.info("table de la date {}", (Object) tabValue);

            String[] tabValueDate = tabValue[0].split("\\.");
            log.info("tabValueDate de la date {}", (Object) tabValueDate);


            String newValue = tabValueDate[2] + "-" + tabValueDate[1] + "-" + tabValueDate[0] + " " + tabValue[1];
            log.info("valeur de la date correctement formater:  {}", newValue);

            if (newValue.length() == 15)
                newValue = (LocalDate.parse(newValue, DateTimeFormatter.ofPattern("yyyy-MM-d"))).format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

            if (value.length() == 16) {
                dateFormat = "yyyy-MM-dd HH:mm";
            } else {
                dateFormat = "yyyy-MM-dd HH:mm:ss.SSS";
            }
            log.debug(" dateFormat " + dateFormat);

            SimpleDateFormat formatter6 = new SimpleDateFormat(dateFormat);
            log.info("valeur de la date a convertir:  {}", newValue.trim());
            Date date = formatter6.parse(newValue.trim());
            return new Timestamp(date.getTime());

        } else {
            return null;
        }
    }

    public long getNbDays(Date datedebut, Date datefin) {
        long diff = datefin.getTime() - datedebut.getTime();
        return TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
    }

    public Date getDateFin(Date datedebut, long nbDays) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(datedebut);
        cal.add(Calendar.DATE, (int) nbDays);

        Date newdate = cal.getTime();
        return this.convertDate2(newdate);
    }

    /**
     * This method calculates the date of the end of a given duration from a given start date.
     *
     * @param datedebut the start date
     * @param seconde the duration in seconds
     * @return the date of the end of the given duration from the given start date
     * @author Katina
     */
    public Date getDateFinBySeconde(@NotNull Date datedebut, @NotNull long seconde) {
        if (seconde<=0)
            return datedebut;
        long dateDebutMili = datedebut.toInstant().toEpochMilli();
        log.info("date de debut en miliséconde {}", dateDebutMili);
        long dateFinMili = dateDebutMili + TimeUnit.SECONDS.toMillis(seconde);
        log.info("date de fin en miliséconde {}", dateFinMili);
       try {
           Date datefin = new Date(dateFinMili);
           log.info("date de fin en type Date ={}", datefin);
           return datefin;
       }catch (Exception e) {
           log.error("erreur lors de la conversion de la date de fin");
           return null;
       }
    }

    public String getCurrentDateInString() {
        Date dt = new Date();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        return df.format(dt);

    }

    public String convertDateToTimestamp(Date dt) {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        String date = df.format(dt);
        return date;

    }

    public String createFile(MultipartFile file, String path, String fileName) {
        return null;
    }


    public Boolean compareDateGiveToCurrentDate(Date d1, Timestamp currentDate){
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

        Boolean bool;
        String date1 = df.format(d1);
        log.info("Date fourni: {}", date1);
        String date2 = df.format(currentDate);
        log.info("Currentdate: {}", date2);

        long diff = d1.getTime() - currentDate.getTime();

        if (diff>0){
            bool = true;
        }else {
            bool = false;
        }

        log.info("Nombre de jour: {}", diff);

        return bool;
    }

    public long getNbsDaysFromSecond(Integer seconde){
        return (seconde/86400);
    }

    public String getEndDate(long seconds) {
        Instant instant = Instant.now().plusSeconds(seconds);
        ZonedDateTime zonedDateTime = ZonedDateTime.ofInstant(instant, ZoneId.systemDefault());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return zonedDateTime.format(formatter);
    }


}
