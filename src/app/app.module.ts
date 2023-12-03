import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { EditScoresComponent } from './edit-scores/edit-scores.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ViewScoreboardComponent } from './view-scoreboard/view-scoreboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EditScoresComponent,
    LiveScoresComponent,
    ViewScoreboardComponent,
    SettingsComponent,
    SettingsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScoreboardComponent,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SettingsDialogComponent],
})
export class AppModule { }
