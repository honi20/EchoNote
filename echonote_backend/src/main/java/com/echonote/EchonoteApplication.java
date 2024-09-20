package com.echonote;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class EchonoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(EchonoteApplication.class, args);
	}

}
