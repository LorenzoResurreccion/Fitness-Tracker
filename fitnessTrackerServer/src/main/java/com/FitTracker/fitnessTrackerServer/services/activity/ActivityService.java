package com.FitTracker.fitnessTrackerServer.services.activity;

import java.util.List;

import com.FitTracker.fitnessTrackerServer.DTO.ActivityDTO;

public interface ActivityService {

    ActivityDTO postActivity(ActivityDTO dto);

    List<ActivityDTO> getActivities();
}
