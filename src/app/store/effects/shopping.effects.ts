import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';
import {
  AddItemAction,
  AddItemFailAction,
  AddItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailAction,
  LoadShoppingSuccessAction,
  RemoveItemAction,
  RemoveItemFailAction,
  RemoveItemSuccessAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.query().pipe(
        map((data) => new LoadShoppingSuccessAction(data)),
        catchError((err) => of(new LoadShoppingFailAction(err)))
      )
    )
  );

  @Effect() addItem$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap((data) =>
      this.shoppingService.add(data.payload).pipe(
        map(() => new AddItemSuccessAction(data.payload)),
        catchError((err) => of(new AddItemFailAction(err)))
      )
    )
  );

  @Effect() removeItem$ = this.actions$.pipe(
    ofType<RemoveItemAction>(ShoppingActionTypes.REMOVE_ITEM),
    mergeMap((data) =>
      this.shoppingService.remove(data.payload).pipe(
        map(() => new RemoveItemSuccessAction(data.payload)),
        catchError((err) => of(new RemoveItemFailAction(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
