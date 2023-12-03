import { Injectable, inject } from '@angular/core';
import { Court } from './court';
import { Observable, map } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from '@angular/fire/firestore';

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
      map((items) => items.find((court) => court.id === id))
    );
  }

  updateValue(id: string, key: string, value: number): void {
    const docRef = doc(this.courtsCollection, id);
    updateDoc(docRef, {
      [key]: [value],
    });
  }

  addCourt(newCourt: Court): void {
    const id = String(newCourt.id);
    const data = newCourt;
    delete data['id'];
    setDoc(doc(this.courtsCollection, id), data);
  }

  deleteCourt(id: string) {
    deleteDoc(doc(this.courtsCollection, id));
  }
}
