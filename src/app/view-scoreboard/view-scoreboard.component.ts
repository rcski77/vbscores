import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Court } from '../court/court';
import { CourtService } from '../court/court.service';

@Component({
  selector: 'app-view-scoreboard',
  templateUrl: './view-scoreboard.component.html',
  styleUrls: ['./view-scoreboard.component.css']
})
export class ViewScoreboardComponent {
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

}
