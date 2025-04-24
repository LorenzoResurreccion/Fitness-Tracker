package com.FitTracker.fitnessTrackerServer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;
import com.FitTracker.fitnessTrackerServer.services.goal.GoalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GoalController {

    private final GoalService goalService;

    public ResponseEntity<?> postGoal(@RequestBody GoalDTO dto){
        GoalDTO createGoal = goalService.posGoal(dto);

        if(createGoal != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createGoal);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }


}
