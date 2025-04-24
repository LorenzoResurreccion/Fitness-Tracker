package com.FitTracker.fitnessTrackerServer.services.workout;

import java.util.List;

import com.FitTracker.fitnessTrackerServer.DTO.WorkoutDTO;

public interface WorkoutService {

    WorkoutDTO postWorkout(WorkoutDTO dto);
    List<WorkoutDTO>getWorkouts(String email);
}
