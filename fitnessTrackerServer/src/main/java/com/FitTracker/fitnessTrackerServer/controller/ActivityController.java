package com.FitTracker.fitnessTrackerServer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FitTracker.fitnessTrackerServer.DTO.ActivityDTO;
import com.FitTracker.fitnessTrackerServer.services.activity.ActivityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ActivityController {
    
    private final ActivityService activityService;

    @PostMapping("/activity")
    public ResponseEntity<?> postActivity(@RequestBody ActivityDTO dto){
        ActivityDTO createActivity = activityService.postActivity(dto);
        
        if (createActivity != null){
            return ResponseEntity.ok(createActivity);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }

    @GetMapping("/activity")
    
    public ResponseEntity<?> getActivities(@RequestParam String email) {
       
        try{
            return ResponseEntity.ok(activityService.getActivities(email));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }

    @DeleteMapping("/activity")
    public ResponseEntity<?> deleteActivity(@RequestBody ActivityDTO dto) {
        int result = activityService.deleteActivity(dto.getId());
        if (result == 1) {
            return ResponseEntity.status(HttpStatus.OK).body("record deleted");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
        }
    }

}
