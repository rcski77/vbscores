import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreEntryComponent } from './score-entry/score-entry.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { EditScoresComponent } from './edit-scores/edit-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    EditScoresComponent,
    ScoreEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScoreboardComponent,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
