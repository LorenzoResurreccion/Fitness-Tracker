package com.FitTracker.fitnessTrackerServer.DTO;

import lombok.Data;

@Data
public class RegisterUserDTO {

    private String email;

    private String password;

    private String fullname;
}
