package com.FitTracker.fitnessTrackerServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FitTracker.fitnessTrackerServer.Entity.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long>{

}
