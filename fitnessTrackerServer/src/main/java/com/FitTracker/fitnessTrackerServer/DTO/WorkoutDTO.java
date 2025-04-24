package com.FitTracker.fitnessTrackerServer.DTO;

import java.util.Date;

import lombok.Data;

@Data
public class WorkoutDTO {

    private long id;

    private Date date;

    private String category;

    private String name;

    private int duration;

    private double weight;

    private String details;

    private String email;

}
