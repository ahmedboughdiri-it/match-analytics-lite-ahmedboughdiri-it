package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPlayer;

    private String name;
    private String team;

    @Enumerated(EnumType.STRING)
    private Position position;

    public enum Position {
        GK, DEF, MID, FWD
    }

    // Simple Many-to-One to Match
    @ManyToOne
    @JoinColumn(name = "match_id")
    @JsonIgnore // avoid recursion
    private Match match;
}
