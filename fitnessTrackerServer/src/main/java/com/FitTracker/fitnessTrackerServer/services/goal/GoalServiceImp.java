package com.FitTracker.fitnessTrackerServer.services.goal;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;
import com.FitTracker.fitnessTrackerServer.Entity.Goal;
import com.FitTracker.fitnessTrackerServer.repository.GoalRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GoalServiceImp {

    private final GoalRepository goalRepository;

    public GoalDTO posGoal(GoalDTO dto) {
        Goal goal = new  Goal();

        goal.setTitle(dto.getTitle());
        goal.setDetails(dto.getDetails());
        goal.setStart(dto.getStart());
        goal.setEnd(dto.getEnd());
        goal.setCompleted(dto.isCompleted());
        goal.setEmail(dto.getEmail());

        return goalRepository.save(goal).getGoalDTO();
    }

    public List<GoalDTO> getGoals(String email) {
        List<Goal> goals = goalRepository.findByEmail(email);

        return goals.stream().map(Goal::getGoalDTO).collect(Collectors.toList());
    }



}
