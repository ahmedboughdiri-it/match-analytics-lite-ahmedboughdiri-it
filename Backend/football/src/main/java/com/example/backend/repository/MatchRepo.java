package com.example.backend.repository;

import com.example.backend.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepo extends JpaRepository<Match, Integer> {
}
