import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: ShoppingItem[] = [
  {
    id: 's1',
    name: 'Milk',
  },
  {
    id: 's2',
    name: 'Eggs',
  },
  {
    id: 's3',
    name: 'Flour',
  },
];

export function ShoppingReducer(
  state: ShoppingItem[] = initialState,
  action: any
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [action.payload, ...state];
    case ShoppingActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
