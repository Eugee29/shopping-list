import { Component, Input } from '@angular/core';
import { ShoppingItem } from 'src/app/store/models/shopping-item.model';

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  @Input() shoppingItem!: ShoppingItem;
}
