import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourtService } from '../court/court.service';
import { Court } from '../court/court';

@Component({
  selector: 'app-edit-scores',
  templateUrl: './edit-scores.component.html',
  styleUrls: ['./edit-scores.component.css'],
})
export class EditScoresComponent {
  court$: Court | undefined;

  constructor(
    private route: ActivatedRoute,
    private courtService: CourtService,
  ) {}

  ngOnInit(): void {
    this.getCourt();
  }

  getCourt(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.courtService.getCourt(id).subscribe((court) => (this.court$ = court));
  }

  addScore(teamScore: string): void {
    let score = 0;
    if (teamScore === 'score1') {
      score = Number(this.court$?.score1);
    } else {
      score = Number(this.court$?.score2);
    }
    this.courtService.updateValue(
      String(this.route.snapshot.paramMap.get('id')),
      teamScore,
      score + 1
    );
  }

  decreaseScore(teamScore: string): void {
    let score = 0;
    if (teamScore === 'score1') {
      score = Number(this.court$?.score1);
    } else {
      score = Number(this.court$?.score2);
    }
    this.courtService.updateValue(
      String(this.route.snapshot.paramMap.get('id')),
      teamScore,
      score - 1
    );
  }

  nextGame(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (this.court$) {
      if (
        this.court$.score1 >= 25 &&
        this.court$.score1 - this.court$.score2 >= 2
      ) {
        this.courtService.updateValue(id, 'sets1', Number(this.court$.sets1 + 1));
        this.courtService.updateValue(id, 'score1', 0);
        this.courtService.updateValue(id, 'score2', 0);
      } else if (
        this.court$.score2 >= 25 &&
        this.court$.score2 - this.court$.score1 >= 2
      ) {
        this.courtService.updateValue(id, 'sets2', Number(this.court$.sets2 + 1));
        this.courtService.updateValue(id, 'score1', 0);
        this.courtService.updateValue(id, 'score2', 0);
      }
    }
  }

  resetScoreboard(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (this.court$) {
      this.courtService.updateValue(id, 'sets1', 0);
      this.courtService.updateValue(id, 'sets2', 0);
      this.courtService.updateValue(id, 'score1', 0);
      this.courtService.updateValue(id, 'score2', 0);
    }
  }
}
