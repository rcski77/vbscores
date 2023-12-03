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
  court$: Court | undefined;

  constructor(
    private route: ActivatedRoute,
    private courtService: CourtService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCourt();
  }

  getCourt(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.courtService.getCourt(id).subscribe((court) => (this.court$ = court));
  }

  addScore(teamScore: string): void {
    let score= 0;
    if (teamScore === 'score1'){
      score = Number(this.court$?.score1);
    } else {
      score = Number(this.court$?.score2);
    }
    this.courtService.updateValue(String(this.route.snapshot.paramMap.get('id')), teamScore, score + 1);
  }

  decreaseScore(teamScore: string): void {
    let score= 0;
    if (teamScore === 'score1'){
      score = Number(this.court$?.score1);
    } else {
      score = Number(this.court$?.score2);
    }
    this.courtService.updateValue(String(this.route.snapshot.paramMap.get('id')), teamScore, score - 1);
  }
}
