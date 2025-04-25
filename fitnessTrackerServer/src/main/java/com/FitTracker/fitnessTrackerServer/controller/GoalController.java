package com.FitTracker.fitnessTrackerServer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;
import com.FitTracker.fitnessTrackerServer.services.goal.GoalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GoalController {

    private final GoalService goalService;

    @PostMapping("/goal")
    public ResponseEntity<?> postGoal(@RequestBody GoalDTO dto){
        GoalDTO createGoal = goalService.postGoal(dto);

        if(createGoal != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createGoal);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }

    @GetMapping("/goal")
    public ResponseEntity<?> getGoals(@RequestParam String email) {
        try {
            return ResponseEntity.ok(goalService.getGoals(email));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }


}
