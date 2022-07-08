import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingActionTypes } from '../actions/shopping.actions';

export interface ShoppingState {
  items: ShoppingItem[];
  loading: boolean;
  error: Error | null;
}

const initialState: ShoppingState = {
  items: [],
  loading: false,
  error: null,
};

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: any
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true,
      };

    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case ShoppingActionTypes.LOAD_SHOPPING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };

    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };

    case ShoppingActionTypes.ADD_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ShoppingActionTypes.REMOVE_ITEM:
      return {
        ...state,
        loading: true,
      };

    case ShoppingActionTypes.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ShoppingActionTypes.REMOVE_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
