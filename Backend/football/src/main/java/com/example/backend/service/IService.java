package com.example.backend.service;

import com.example.backend.entity.Event;
import com.example.backend.entity.Match;

import java.util.Map;

public interface IService {
    Match getMatch();
    Event createEvent(Event event);
    Map<String, Object> getPlayerStats(Integer playerId);
}
