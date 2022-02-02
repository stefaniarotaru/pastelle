package com.pastelle.shop.model;

import lombok.*;

@Data
@NoArgsConstructor
public class RegistrationRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
