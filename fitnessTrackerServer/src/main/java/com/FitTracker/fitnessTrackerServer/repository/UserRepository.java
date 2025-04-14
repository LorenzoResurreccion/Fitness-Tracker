package com.FitTracker.fitnessTrackerServer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FitTracker.fitnessTrackerServer.Entity.User;

public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);

}
