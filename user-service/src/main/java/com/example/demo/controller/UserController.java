package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{id}")
    @Cacheable(value = "users", key = "#id")
    public User getUser(@PathVariable Long id) {

        System.out.println("Fetching from MySQL...");

        return userRepository.findById(id)
                .orElseThrow();
    }
}