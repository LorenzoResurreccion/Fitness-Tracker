package com.FitTracker.fitnessTrackerServer.DTO;

import java.util.Date;

import lombok.Data;

@Data
public class UserDTO {

    private Long id;

    private String fullname; 

    private String email;

    private String password;

    private Date createdAt;
    
    private Date updatedAt;
}
