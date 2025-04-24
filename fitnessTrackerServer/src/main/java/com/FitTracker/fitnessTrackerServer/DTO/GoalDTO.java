package com.FitTracker.fitnessTrackerServer.DTO;

import java.util.Date;

import lombok.Data;

@Data
public class GoalDTO {
    private long id;

    private String title;

    private String details;

    private Date start;

    private Date end;

    private boolean completed;

    private String email;

}
