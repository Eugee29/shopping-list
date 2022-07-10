import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddItemAction,
  LoadShoppingAction,
  RemoveItemAction,
} from '../store/actions/shopping.actions';
import { AppState } from '../store/models/app-state.model';
import { ShoppingItem } from '../store/models/shopping-item.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  shoppingItems$!: Observable<ShoppingItem[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<Error | null>;
  newItemName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping.items);
    this.loading$ = this.store.select((store) => store.shopping.loading);
    this.error$ = this.store.select((store) => store.shopping.error);
    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() {
    if (!this.newItemName) return;
    this.store.dispatch(
      new AddItemAction({ name: this.newItemName } as ShoppingItem)
    );
    this.newItemName = '';
  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
