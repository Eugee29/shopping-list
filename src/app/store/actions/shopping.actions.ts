import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAIL = '[SHOPPING] Load Shopping Fail',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAIL = '[SHOPPING] Add Item Fail',
  REMOVE_ITEM = '[SHOPPING] Remove Item',
  REMOVE_ITEM_SUCCESS = '[SHOPPING] Remove Item Success',
  REMOVE_ITEM_FAIL = '[SHOPPING] Remove Item Fail',
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: ShoppingItem[]) {}
}

export class LoadShoppingFailAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAIL;
  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}

export class AddItemFailAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAIL;
  constructor(public payload: Error) {}
}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;
  constructor(public payload: string) {}
}

export class RemoveItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_SUCCESS;
  constructor(public payload: string) {}
}

export class RemoveItemFailAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_FAIL;
  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailAction
  | RemoveItemAction
  | RemoveItemSuccessAction
  | RemoveItemFailAction;
