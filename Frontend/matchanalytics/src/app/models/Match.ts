import { Player } from '../models/Player.';
import { MatchEvent } from '../models/Event.';

export interface Match {
  idMatch: number;
  date: string; // ISO
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  players: Player[];
  events: MatchEvent[];
}
