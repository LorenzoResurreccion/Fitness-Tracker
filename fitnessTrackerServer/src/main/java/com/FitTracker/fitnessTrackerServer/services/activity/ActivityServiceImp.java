package com.FitTracker.fitnessTrackerServer.services.activity;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.FitTracker.fitnessTrackerServer.DTO.ActivityDTO;
import com.FitTracker.fitnessTrackerServer.Entity.Activity;
import com.FitTracker.fitnessTrackerServer.repository.ActivityRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ActivityServiceImp implements ActivityService{

    private final ActivityRepository activityRepository;

    public ActivityDTO postActivity(ActivityDTO dto){
        Activity activity = new Activity();

        activity.setDate(dto.getDate());
        activity.setSteps(dto.getSteps());
        activity.setDistance(dto.getDistance());
        activity.setCaloriesBurned(dto.getCaloriesBurned());
        activity.setEmail(dto.getEmail());

        return activityRepository.save(activity).getActivityDTO();
    }

    public List<ActivityDTO> getActivities(String email) {
        List<Activity> activities = activityRepository.findByEmail(email);
        return activities.stream().map(Activity::getActivityDTO).collect(Collectors.toList());
    }

    public int deleteActivity(long id) {
        try {
            activityRepository.deleteById(id);
            return 1;
        } catch (Exception e) {
            return -1;
        }
        
    }
}
