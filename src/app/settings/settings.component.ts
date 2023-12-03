import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CourtService } from '../court/court.service';
import { Court } from '../court/court';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {

  courts: Court[] = [];

  constructor(private courtService: CourtService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCourts();
  }

  getCourts(): void {
    this.courtService.getCourts().subscribe((courts) => (this.courts = courts));
  }

  addCourt(): void {
    this.dialog.open(SettingsDialogComponent);
  }

  delete(id: string | undefined) {
    if (typeof id === 'string') {
      if(window.confirm("Delete?")) {
        this.courtService.deleteCourt(id);
      }
    }
  }
}
