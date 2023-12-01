import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScoreEntryComponent } from './score-entry/score-entry.component';
import { EditScoresComponent } from './edit-scores/edit-scores.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ScoreEntryComponent },
  { path: 'court/:id', component: EditScoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
