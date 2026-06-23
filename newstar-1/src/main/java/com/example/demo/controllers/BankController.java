package com.example.demo.controllers;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/bank")
public class BankController {

    private final RestTemplate restTemplate;

    public BankController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/user")
    @CircuitBreaker(
            name = "userService",
            fallbackMethod = "fallbackResponse")
    public String getUserData() {

        return restTemplate.getForObject(
                "http://localhost:8082/users/test",
                String.class);
    }

    public String fallbackResponse(Exception ex) {
        return "User Service is Down. Please try later.";
    }
}