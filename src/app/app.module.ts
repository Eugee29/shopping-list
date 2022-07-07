import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemPreviewComponent, ShoppingListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
