package com.kaji17.core.tools;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class JsonTools {

	public String converToJsonString(Object object) {

		try {
			log.trace("Convert object to JSON String :: " + object);
			ObjectMapper mapper = new ObjectMapper();
			String json = mapper.writeValueAsString(object);
			log.trace("==> Object to json : " + json);
			return json;
		} catch (Exception e) {
			log.error("==> Error ={}", e.toString());
			return null;
		}
	   
	}

}
