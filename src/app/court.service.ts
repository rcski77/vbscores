import { Injectable } from '@angular/core';
import { Court, COURTS } from './court';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  constructor() { }

  getCourts(): Observable<Court[]> {
    const courts = of(COURTS);
    return courts;
  }

  getCourt(id: string): Observable<Court> {
    const court = COURTS.find(c => c.id === id)!;
    return of(court);
  }
}
