import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { Court } from '../court';
import { CourtService } from '../court.service';

@Component({
  standalone: true,
  selector: 'app-score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css'],
  imports: [NgFor, ScoreboardComponent],
})

export class ScoreEntryComponent {
  courts: Court[] = [];

  constructor(private courtService: CourtService) {}

  ngOnInit(): void {
    this.getCourts();
  }

  getCourts(): void {
    this.courtService.getCourts()
      .subscribe(courts => this.courts = courts);
  }
}
