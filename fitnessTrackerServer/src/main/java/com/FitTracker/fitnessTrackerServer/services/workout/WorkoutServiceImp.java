package com.FitTracker.fitnessTrackerServer.services.workout;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.FitTracker.fitnessTrackerServer.DTO.WorkoutDTO;
import com.FitTracker.fitnessTrackerServer.Entity.Workout;
import com.FitTracker.fitnessTrackerServer.repository.WorkoutReposiory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WorkoutServiceImp implements WorkoutService{

    private final WorkoutReposiory workoutReposiory;

    public WorkoutDTO postWorkout(WorkoutDTO dto) {
        Workout workout = new Workout();

        workout.setDate(dto.getDate());
        workout.setCategory(dto.getCategory());
        workout.setName(dto.getName());
        workout.setDuration(dto.getDuration());
        workout.setWeight(dto.getWeight());
        workout.setDetails(dto.getDetails());

        return workoutReposiory.save(workout).getWorkoutDTO();
        
    }

    public List<WorkoutDTO>getWorkouts(){
        List<Workout> workouts = workoutReposiory.findAll();
        return workouts.stream().map(Workout::getWorkoutDTO).collect(Collectors.toList());

    }

}
