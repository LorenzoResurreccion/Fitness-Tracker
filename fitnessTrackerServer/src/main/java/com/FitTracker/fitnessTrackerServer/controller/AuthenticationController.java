package com.FitTracker.fitnessTrackerServer.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FitTracker.fitnessTrackerServer.DTO.LoginUserDTO;
import com.FitTracker.fitnessTrackerServer.DTO.RegisterUserDTO;
import com.FitTracker.fitnessTrackerServer.Entity.User;
import com.FitTracker.fitnessTrackerServer.services.JWT.JWTService;
import com.FitTracker.fitnessTrackerServer.services.authentication.AuthenticationService;
import com.FitTracker.fitnessTrackerServer.services.authentication.LoginResponse;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final JWTService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(
        JWTService jwtService,
         AuthenticationService authenticationService
    ) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterUserDTO dto){
        User registeredUser = authenticationService.signup(dto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDTO dto){
        User authenticatedUser = authenticationService.authenticate(dto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

}
