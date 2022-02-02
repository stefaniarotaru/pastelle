package com.pastelle.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class PastelleApplication {

	public static void main(String[] args) {
		SpringApplication.run(PastelleApplication.class, args);
	}

}
