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

    public String convertDateToTimestamp(Date dt) {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        String date = df.format(dt);
        return date;

    }
}
