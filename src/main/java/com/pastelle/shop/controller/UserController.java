package com.pastelle.shop.controller;

import com.pastelle.shop.model.User;
import com.pastelle.shop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String getUser() {
        User user = new User(1, "mail@mail.com", "password1", "username1");
        userRepository.save(user);
        return "am creat user-ul";
    }

}
