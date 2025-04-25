package com.FitTracker.fitnessTrackerServer.Entity;

import java.util.Date;

import com.FitTracker.fitnessTrackerServer.DTO.GoalDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String details;

    private Date start;

    private Date end;

    private boolean completed;

    private String email;

    public GoalDTO getGoalDTO() {
        GoalDTO goalDTO = new GoalDTO();

        goalDTO.setId(id);
        goalDTO.setTitle(title);
        goalDTO.setDetails(details);
        goalDTO.setStart(start);
        goalDTO.setEnd(end);
        goalDTO.setCompleted(completed);
        goalDTO.setEmail(email);

        return goalDTO;
    }

}
