package com.example.backend.repository;

import com.example.backend.entity.Event;
import com.example.backend.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event, Integer> {
    long countByPlayerAndType(Player player, Event.Type type);

    long countByAssist(Player player);
}
