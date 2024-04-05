import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderSpinnerComponent } from './shared/loader-spinner/loader-spinner.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ShoppingCartComponent } from './shared/shopping-cart/shopping-cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './shared/orders-list/orders-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderSpinnerComponent,
    DashboardComponent,
    HomeComponent,
    ErrorPageComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    CartComponent,
    ShoppingCartComponent,
    PlaceOrderComponent,
    OrdersComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
