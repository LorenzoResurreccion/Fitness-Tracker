package com.FitTracker.fitnessTrackerServer.Entity;

import java.util.Date;

import com.FitTracker.fitnessTrackerServer.DTO.WorkoutDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Date date;

    private String category;

    private String name;

    private int duration;

    private double weight;

    private String details;

    private String email;

    public WorkoutDTO getWorkoutDTO() {
        WorkoutDTO workoutDTO = new WorkoutDTO();

        workoutDTO.setId(id);
        workoutDTO.setDate(date);
        workoutDTO.setCategory(category);
        workoutDTO.setName(name);
        workoutDTO.setDuration(duration);
        workoutDTO.setWeight(weight);
        workoutDTO.setDetails(details);
        workoutDTO.setEmail(email);

        return workoutDTO;
    }


}
