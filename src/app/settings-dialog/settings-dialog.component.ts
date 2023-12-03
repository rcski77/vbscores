import { Injectable, Component } from '@angular/core';
import {
  MatDialog,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';

import { Court } from '../court/court';
import { CourtService } from '../court/court.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css'],
})
export class SettingsDialogComponent {
  constructor(private dialog: MatDialog, private courtService: CourtService) {}

  court: Court = {
    id: '',
    courtNum: 0,
    team1: '',
    team2: '',
    score1: 0,
    score2: 0,
    sets1: 0,
    sets2: 0,
  };

  submit(): void {
    this.court.id = `court${this.court.courtNum}`;
    this.courtService.addCourt(this.court);
  }

}
