import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreEntryComponent } from './score-entry/score-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ScoreEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
