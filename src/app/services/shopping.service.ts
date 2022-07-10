import { Injectable } from '@angular/core';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { Observable, of } from 'rxjs';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private firestore: Firestore) {}

  query(): Observable<ShoppingItem[]> {
    const itemCollection = collection(this.firestore, 'item');
    return collectionData(itemCollection) as Observable<ShoppingItem[]>;
  }

  add(item: ShoppingItem) {
    item = { ...item, id: uuidv4() };
    const itemCollection = collection(this.firestore, 'item');
    setDoc(doc(itemCollection, item.id), item);
    return of(item);
  }

  remove(id: string) {
    const itemCollection = collection(this.firestore, 'item');
    deleteDoc(doc(itemCollection, id));
    return of(1);
  }
}
