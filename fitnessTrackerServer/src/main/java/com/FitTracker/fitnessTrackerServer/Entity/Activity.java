package com.FitTracker.fitnessTrackerServer.Entity;

import java.util.Date;

import com.FitTracker.fitnessTrackerServer.DTO.ActivityDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Date date;

    private int steps;

    private double distance;
    
    private int caloriesBurned;

    public ActivityDTO getActivityDTO(){
        ActivityDTO activityDTO = new ActivityDTO();

        activityDTO.setId(id);
        activityDTO.setDate(date);
        activityDTO.setDistance(distance);
        activityDTO.setSteps(steps);
        activityDTO.setCaloriesBurned(caloriesBurned);
        
        return activityDTO;
    }
}
