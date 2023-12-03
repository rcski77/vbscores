import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { EditScoresComponent } from './edit-scores/edit-scores.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ViewScoreboardComponent } from './view-scoreboard/view-scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EditScoresComponent,
    LiveScoresComponent,
    ViewScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScoreboardComponent,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
