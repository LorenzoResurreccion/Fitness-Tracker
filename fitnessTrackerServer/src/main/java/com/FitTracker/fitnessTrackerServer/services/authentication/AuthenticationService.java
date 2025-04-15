package com.FitTracker.fitnessTrackerServer.services.authentication;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.FitTracker.fitnessTrackerServer.DTO.LoginUserDTO;
import com.FitTracker.fitnessTrackerServer.DTO.RegisterUserDTO;
import com.FitTracker.fitnessTrackerServer.Entity.User;
import com.FitTracker.fitnessTrackerServer.repository.UserRepository;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder,
        AuthenticationManager authenticationManager
    ){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User signup (RegisterUserDTO dto) {
        User user = new User();
        
        user.setFullname(dto.getFullname());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        return userRepository.save(user);

    }

    public User authenticate(LoginUserDTO dto) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword())
        );

        return userRepository.findByEmail(dto.getEmail()).orElseThrow();
    }



    



}
