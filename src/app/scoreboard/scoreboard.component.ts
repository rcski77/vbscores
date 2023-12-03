import { Component, Input } from '@angular/core';
import { Court } from '../court/court';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  imports: [NgIf],
})
export class ScoreboardComponent {
  @Input() court?: Court;
}
