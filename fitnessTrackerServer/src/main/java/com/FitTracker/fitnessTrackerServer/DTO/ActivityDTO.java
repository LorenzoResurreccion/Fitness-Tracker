package com.FitTracker.fitnessTrackerServer.DTO;

import java.util.Date;

import lombok.Data;

@Data
public class ActivityDTO {
    private long id;

    private Date date;

    private int steps;

    private double distance;
    
    private int caloriesBurned;

    private String email;
}
