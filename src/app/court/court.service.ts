import { Injectable, inject } from '@angular/core';
import { Court } from './court';
import { Observable, of, filter, map } from 'rxjs';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  private firestore: Firestore = inject(Firestore);

  private courts$: Observable<Court[]>;
  private courtsCollection;

  constructor() {
    this.courtsCollection = collection(this.firestore, 'scoreboards');
    this.courts$ = collectionData(this.courtsCollection, { idField : 'id'}) as Observable<Court[]>;
  }

  getCourts(): Observable<Court[]> {
    return this.courts$;
  }

  async getCourt(id: string): Promise<Observable<Court | undefined>> {
    const courtRef = doc(this.firestore, 'scoreboards', id);
    const court =  await getDoc(courtRef);
    if (court.exists()) {
      return of(court.data()) as Observable<Court>;
    } else {
      return of(undefined);
    }
  }

  updateCourt(id: string): void {

  }
}
