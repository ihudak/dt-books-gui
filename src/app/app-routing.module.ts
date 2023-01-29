import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClientListComponent} from "./client-list/client-list.component";
import {CreateClientComponent} from "./create-client/create-client.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {ClientDetailsComponent} from "./client-details/client-details.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";
import {CartListComponent} from "./cart-list/cart-list.component";
import {CreateCartComponent} from "./create-cart/create-cart.component";
import {UpdateCartComponent} from "./update-cart/update-cart.component";
import {StorageListComponent} from "./storage-list/storage-list.component";
import {IngestStorageComponent} from "./ingest-storage/ingest-storage.component";
import {SellStorageComponent} from "./sell-storage/sell-storage.component";
import {CreateStorageComponent} from "./create-storage/create-storage.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'update-client/:id', component: UpdateClientComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book-details/:isbn', component: BookDetailsComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'carts', component: CartListComponent },
  { path: 'create-cart', component: CreateCartComponent },
  { path: 'update-cart/:id', component: UpdateCartComponent },
  { path: 'storage', component: StorageListComponent },
  { path: 'create-storage', component: CreateStorageComponent },
  { path: 'ingest-storage/:isbn', component: IngestStorageComponent },
  { path: 'sell-storage/:isbn', component: SellStorageComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
