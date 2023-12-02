import { Injectable, inject } from '@angular/core';
import { Court, COURTS } from './court';
import { Observable, of } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  private firestore: Firestore = inject(Firestore);

  private courts$: Observable<Court[]>;

  constructor() {
    const courtsCollection = collection(this.firestore, 'scoreboards');
    this.courts$ = collectionData(courtsCollection) as Observable<Court[]>;
  }

  getCourts(): Observable<Court[]> {
    return this.courts$;
  }

  getCourt(id: string): Observable<Court> {
    const court = COURTS.find(c => c.id === id)!;
    return of(court);
  }
}
