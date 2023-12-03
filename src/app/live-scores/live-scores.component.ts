import { Component, OnInit } from '@angular/core';

import { Court } from '../court/court';
import { CourtService } from '../court/court.service';

@Component({
  selector: 'app-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.css'],
})

export class LiveScoresComponent {
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
