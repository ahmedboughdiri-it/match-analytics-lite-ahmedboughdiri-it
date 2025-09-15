package com.example.backend.service;

import com.example.backend.entity.Event;
import com.example.backend.entity.Match;
import com.example.backend.entity.Player;
import com.example.backend.repository.EventRepo;
import com.example.backend.repository.MatchRepo;
import com.example.backend.repository.PlayerRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@org.springframework.stereotype.Service
@AllArgsConstructor
public class Service implements IService {
MatchRepo matchRepo;
EventRepo eventRepo;
PlayerRepo playerRepo;

    //******************** MATCH ********************
    public Match getMatch() {
        return matchRepo.findAll().stream().findFirst()
                .orElseThrow(() -> new RuntimeException("No match found"));
    }

    //******************** EVENT ********************
    public Event createEvent(Event event) {
        // Validate player
        Player player = playerRepo.findById(event.getPlayer().getIdPlayer())
                .orElseThrow(() -> new RuntimeException("Player not found"));
        event.setPlayer(player);

        // Validate match
        Match match = matchRepo.findById(event.getMatch().getIdMatch())
                .orElseThrow(() -> new RuntimeException("Match not found"));
        event.setMatch(match);

        // Optional assist
        if (event.getAssist() != null) {
            Player assist = playerRepo.findById(event.getAssist().getIdPlayer())
                    .orElseThrow(() -> new RuntimeException("Assist player not found"));
            event.setAssist(assist);
        }

        return eventRepo.save(event);
    }

    //******************** PLAYER STATS ********************
    public Map<String, Object> getPlayerStats(Integer playerId) {
        Player player = playerRepo.findById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found"));

        long goals = eventRepo.countByPlayerAndType(player, Event.Type.GOAL);
        long assists = eventRepo.countByAssist(player);

        Map<String, Object> stats = new HashMap<>();
        stats.put("playerId", player.getIdPlayer());
        stats.put("name", player.getName());
        stats.put("team", player.getTeam());
        stats.put("goals", goals);
        stats.put("assists", assists);
        stats.put("rating", 0); // placeholder

        return stats;
    }

}
