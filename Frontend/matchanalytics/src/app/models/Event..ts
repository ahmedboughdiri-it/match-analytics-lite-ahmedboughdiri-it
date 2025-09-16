import { Player } from '../models/Player.';

export type EventType = 'GOAL'|'ASSIST'|'SHOT'|'TACKLE'|'PASS';

export interface MatchEvent {
  idEvent?: number;
  minute: number;
  type: EventType;
  player: Player;
  match?: { idMatch: number };
  assist?: Player | null;
  onTarget?: boolean;
}
