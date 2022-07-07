import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddItemAction,
  RemoveItemAction,
} from '../store/actions/shopping.actions';
import { AppState } from '../store/models/app-state.model';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  shoppingItems$!: Observable<ShoppingItem[]>;
  newItemName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
  }

  addItem() {
    if (!this.newItemName) return;
    this.store.dispatch(
      new AddItemAction({ id: uuidv4(), name: this.newItemName })
    );
    this.newItemName = '';
  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
