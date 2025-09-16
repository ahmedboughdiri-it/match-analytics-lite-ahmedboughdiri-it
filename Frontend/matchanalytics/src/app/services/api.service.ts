import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/Player.';
import { MatchEvent } from '../models/Event.';
import { Match } from '../models/Match';


const BASE_URL = 'http://localhost:9090';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getMatch(): Observable<Match> {
    return this.http.get<Match>(`${BASE_URL}/match`);
  }

  postEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${BASE_URL}/event`, event);
  }


}
