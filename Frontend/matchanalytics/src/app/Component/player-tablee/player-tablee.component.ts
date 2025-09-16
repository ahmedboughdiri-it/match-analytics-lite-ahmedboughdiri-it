import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/models/Player.';
import { Match } from 'src/app/models/Match';
import { MatchEvent } from 'src/app/models/Event.';
// Chart imports
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-player-tablee',
  templateUrl: './player-tablee.component.html',
  styleUrls: ['./player-tablee.component.css']
})
export class PlayerTableeComponent implements OnInit {
   players = signal<Player[]>([]);
  error = signal<string | null>(null);
  playerStats = signal<{ [id: number]: { goals: number; assists: number; rating: number } }>({});

  // Chart variables
  barChartType: ChartType = 'bar';
  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Goals', backgroundColor: 'rgba(75,192,192,0.7)' },
      { data: [], label: 'Assists', backgroundColor: 'rgba(153,102,255,0.7)' }
    ]
  };
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Goals & Assists per Player' }
    }
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMatch().subscribe({
      next: (match: Match) => {
        this.players.set(match.players);

        const stats: { [id: number]: { goals: number; assists: number; rating: number } } = {};
        match.players.forEach(p => {
          stats[p.idPlayer] = { goals: 0, assists: 0, rating: 0 };
        });

        match.events.forEach((e: MatchEvent) => {
          if (e.type === 'GOAL') stats[e.player.idPlayer].goals++;
          if (e.assist) stats[e.assist.idPlayer].assists++;
        });

        Object.keys(stats).forEach(id => {
          const s = stats[Number(id)];
          s.rating = s.goals * 4 + s.assists * 3;
        });

        this.playerStats.set(stats);

        // ✅ Update chart
        this.barChartData.labels = match.players.map(p => p.name);
        this.barChartData.datasets[0].data = match.players.map(p => stats[p.idPlayer].goals);
        this.barChartData.datasets[1].data = match.players.map(p => stats[p.idPlayer].assists);
      },
      error: () => this.error.set('Failed to load match data. Try again later.')
    });
  }
   // ✅ Add these helper methods to your component class
  getTotalGoals(): number {
    return Object.values(this.playerStats()).reduce((sum, stat) => sum + stat.goals, 0);
  }

  getTotalAssists(): number {
    return Object.values(this.playerStats()).reduce((sum, stat) => sum + stat.assists, 0);
  }
}
