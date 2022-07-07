import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingItem } from '../../store/models/shopping-item.model';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input() shoppingItems!: ShoppingItem[] | null;
  @Output() removeItem = new EventEmitter<string>();

  onRemoveItem(id: string) {
    this.removeItem.emit(id);
  }
}
