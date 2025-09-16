export interface Player {
  idPlayer: number;
  name: string;
  team: string;
  position: 'GK'|'DEF'|'MID'|'FWD'|'FW';
}
