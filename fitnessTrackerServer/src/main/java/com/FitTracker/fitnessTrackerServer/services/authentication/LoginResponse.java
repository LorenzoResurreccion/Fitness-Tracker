package com.FitTracker.fitnessTrackerServer.services.authentication;

import lombok.Data;

@Data
public class LoginResponse {

    private String token;

    private long expiresIn;

}
