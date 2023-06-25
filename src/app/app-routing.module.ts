import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreEntryComponent } from './score-entry/score-entry.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'scoreentry', component: ScoreEntryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
