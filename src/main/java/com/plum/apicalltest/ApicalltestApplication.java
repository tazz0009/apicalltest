package com.plum.apicalltest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@ImportAutoConfiguration({TestFeignClientConfiguration.class})
public class ApicalltestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApicalltestApplication.class, args);
	}

}
