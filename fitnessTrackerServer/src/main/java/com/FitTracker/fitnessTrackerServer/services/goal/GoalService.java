package com.FitTracker.fitnessTrackerServer.services.goal;

import java.util.List;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;

public interface GoalService {

    GoalDTO postGoal(GoalDTO dto);

    List<GoalDTO> getGoals(String email);

}
