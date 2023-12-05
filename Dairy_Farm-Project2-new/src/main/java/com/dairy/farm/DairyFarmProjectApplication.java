package com.dairy.farm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableJpaRepositories("com.dairy.farm.repository")
@EntityScan("com.dairy.farm.model")
@EnableScheduling
public class DairyFarmProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(DairyFarmProjectApplication.class, args);
	}

}
