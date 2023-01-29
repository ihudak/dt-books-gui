import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClientListComponent} from './client-list/client-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CreateClientComponent} from './create-client/create-client.component';
import {FormsModule} from "@angular/forms";
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { StorageListComponent } from './storage-list/storage-list.component';
import { IngestStorageComponent } from './ingest-storage/ingest-storage.component';
import { SellStorageComponent } from './sell-storage/sell-storage.component';
import { CreateStorageComponent } from './create-storage/create-storage.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { RatingDetailsComponent } from './rating-details/rating-details.component';
import { CreateRatingComponent } from './create-rating/create-rating.component';
import { UpdateRatingComponent } from './update-rating/update-rating.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StorageDetailsComponent } from './storage-details/storage-details.component';
import { UpdateStorageComponent } from './update-storage/update-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientDetailsComponent,
    BookListComponent,
    CreateBookComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    CartListComponent,
    CreateCartComponent,
    UpdateCartComponent,
    StorageListComponent,
    IngestStorageComponent,
    SellStorageComponent,
    CreateStorageComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    RatingListComponent,
    RatingDetailsComponent,
    CreateRatingComponent,
    UpdateRatingComponent,
    CartDetailsComponent,
    StorageDetailsComponent,
    UpdateStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
