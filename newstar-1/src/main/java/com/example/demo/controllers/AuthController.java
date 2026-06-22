package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dtos.ChangePasswordRequest;
import com.example.demo.dtos.LoginRequest;
import com.example.demo.entityc.User;
import com.example.demo.repositorys.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return user;
    }

    @PutMapping("/change-password")
    public String changePassword(
            @RequestBody ChangePasswordRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        if (!user.getPassword().equals(request.getOldPassword())) {
            throw new RuntimeException("Old Password Incorrect");
        }

        user.setPassword(request.getNewPassword());

        userRepository.save(user);

        return "Password Updated Successfully";
    }
}