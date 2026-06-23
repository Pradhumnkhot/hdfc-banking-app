package com.example.demo.controller;

import java.rmi.registry.Registry;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ChangePasswordRequest;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

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

    @PostMapping
    public String register(@RequestBody RegisterRequest request) {
    	if(userRepository.findByEmail(request.getEmail()).isPresent()) {
    		return "User already exists";
    	}
    	
    	User user= new User();
    	user.setName(request.getName());
    	user.setEmail(request.getEmail());
    	user.setPassword(request.getPassword());
    	user.setRole(request.getRole());
    	
    	userRepository.save(user);
    	return "User Registered Sucessfully";
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