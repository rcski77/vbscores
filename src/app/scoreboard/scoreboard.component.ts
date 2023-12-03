import { Component, Input } from '@angular/core';
import { Court } from '../court/court';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  imports: [NgIf, MatIconModule, RouterLink],
})
export class ScoreboardComponent {
  @Input() court?: Court;

  selector = false;

  changeSelector(): void {
    this.selector = !this.selector;
  }
}
