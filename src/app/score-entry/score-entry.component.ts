import { Component } from '@angular/core';
import { Court } from '../court';

@Component({
  selector: 'app-score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css']
})
export class ScoreEntryComponent {
  court: Court = {
    courtNum: BigInt(1),
    team1: "Gamepoint 13",
    team2: "TPV 13",
    score1: BigInt(25),
    score2: BigInt(12),
  }

}
