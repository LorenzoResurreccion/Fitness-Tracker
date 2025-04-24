package com.FitTracker.fitnessTrackerServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FitTracker.fitnessTrackerServer.Entity.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long>{
    List<Goal> findByEmail(String email);

}
