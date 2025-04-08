package com.FitTracker.fitnessTrackerServer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FitTracker.fitnessTrackerServer.DTO.WorkoutDTO;
import com.FitTracker.fitnessTrackerServer.services.workout.WorkoutService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class WorkoutController {

    private final WorkoutService workoutService;

    @PostMapping("/workout")
    public ResponseEntity<?> postWorkout(@RequestBody WorkoutDTO dto) {

        WorkoutDTO createWorkout = workoutService.postWorkout(dto);

        if (createWorkout != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createWorkout);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }

    }

    @GetMapping("/workout")
    public ResponseEntity<?> getWorkouts() {
        try {
            return ResponseEntity.ok(workoutService.getWorkouts());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }

}
