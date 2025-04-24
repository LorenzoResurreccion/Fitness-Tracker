package com.FitTracker.fitnessTrackerServer.services.goal;

import java.util.List;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;

public interface GoalService {
    
    public GoalDTO posGoal(GoalDTO dto);

    public List<GoalDTO> getGoals(String email);

}
