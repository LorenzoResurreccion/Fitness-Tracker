package com.FitTracker.fitnessTrackerServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FitTracker.fitnessTrackerServer.Entity.Workout;

@Repository
public interface WorkoutReposiory extends JpaRepository<Workout, Long>{

}
