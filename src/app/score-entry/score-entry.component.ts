import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { Court, COURTS } from '../court';

@Component({
  standalone: true,
  selector: 'app-score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css'],
  imports: [NgFor, ScoreboardComponent],
})

export class ScoreEntryComponent {
  courts = COURTS;
}
