import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LiveScoresComponent } from './live-scores/live-scores.component';
import { EditScoresComponent } from './edit-scores/edit-scores.component';
import { ViewScoreboardComponent } from './view-scoreboard/view-scoreboard.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LiveScoresComponent },
  { path: 'court/:id', component: EditScoresComponent },
  { path: 'view/:id', component: ViewScoreboardComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
