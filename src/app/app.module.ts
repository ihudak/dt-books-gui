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
    CreateStorageComponent
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
