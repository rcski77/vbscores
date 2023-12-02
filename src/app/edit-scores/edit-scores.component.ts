import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CourtService } from '../court/court.service';
import { Court } from '../court/court';

@Component({
  selector: 'app-edit-scores',
  templateUrl: './edit-scores.component.html',
  styleUrls: ['./edit-scores.component.css'],
})
export class EditScoresComponent {
  court: Court | undefined;

  constructor(
    private route: ActivatedRoute,
    private courtService: CourtService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCourt();
  }

  async getCourt(): Promise<void> {
    const id = String(this.route.snapshot.paramMap.get('id'));
    (await this.courtService.getCourt(id)).subscribe((court) => (this.court = court));
  }

  goBack(): void {
    this.location.back();
  }

  addScore(teamID: number): void {
    if (this.court) {
      if (teamID === 1) {
        this.court.score1 = this.court.score1 + 1;
      } else {
        this.court.score2 = this.court.score2 + 1;
      }
    }
  }

  decreaseScore(teamID: number): void {
    if (this.court) {
      if (teamID === 1) {
        this.court.score1 = this.court.score1 - 1;
      } else {
        this.court.score2 = this.court.score2 - 1;
      }
    }
  }
}
