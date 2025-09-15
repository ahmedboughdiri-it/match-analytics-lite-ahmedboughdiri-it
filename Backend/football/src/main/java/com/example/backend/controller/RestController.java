package com.example.backend.controller;

import com.example.backend.entity.Event;
import com.example.backend.entity.Match;
import com.example.backend.service.IService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@org.springframework.web.bind.annotation.RestController
@AllArgsConstructor
public class RestController {
    @Autowired
    IService service;
    //********** Match **********
    @GetMapping("/match")
    public Match getMatch() {
        return service.getMatch();
    }

    //********** Event **********
    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return service.createEvent(event);
    }

    //********** Player Stats **********
    @GetMapping("/player/{id}")
    public Map<String, Object> getPlayerStats(@PathVariable Integer id) {
        return service.getPlayerStats(id);
    }
}

