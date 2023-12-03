import { Injectable, inject } from '@angular/core';
import { Court } from './court';
import { Observable, map } from 'rxjs';
import { Firestore, collection, collectionData, updateDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CourtService {
  private firestore: Firestore = inject(Firestore);

  private courts$: Observable<Court[]>;
  private courtsCollection;

  constructor() {
    this.courtsCollection = collection(this.firestore, 'scoreboards');
    this.courts$ = collectionData(this.courtsCollection, {
      idField: 'id',
    }) as Observable<Court[]>;
  }

  getCourts(): Observable<Court[]> {
    return this.courts$;
  }

  getCourt(id: string): Observable<Court | undefined> {
    return this.courts$.pipe(
      map(items => items.find(court => court.id === id))
      );
  }

  updateValue(id: string, key: string, value: number): void {
    const docRef = doc(this.courtsCollection, id);
    updateDoc(docRef, {
      [key]: [value],
    })
  }
}
