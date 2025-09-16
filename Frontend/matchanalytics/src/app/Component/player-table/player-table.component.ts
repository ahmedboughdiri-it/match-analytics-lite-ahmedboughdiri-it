import { Component ,OnInit,signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/models/Player.';
@Component({
  selector: 'app-player-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  players = signal<Player[]>([]);
  error = signal<string | null>(null);

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMatch().subscribe({
      next: (match) => this.players.set(match.players),
      error: () => this.error.set('Failed to load match data. Try again later.')
    });
  }
}