import { Component, OnInit } from '@angular/core';

import { Court } from '../court/court';
import { CourtService } from '../court/court.service';

@Component({
  selector: 'app-score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css'],
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
