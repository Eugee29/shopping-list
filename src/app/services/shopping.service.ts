import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {}

  query(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(delay(500)); // adding delay to simulate server response
  }

  add(item: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, item);
  }

  remove(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`);
  }
}
