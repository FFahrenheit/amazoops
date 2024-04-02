import { Routes } from "@angular/router";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";
import { SearchComponent } from "./components/search/search.component";
import { ProductComponent } from "./components/product/product.component";
import { SessionGuard } from "./guards/session.guard";
import { CartComponent } from "./components/cart/cart.component";
import { PlaceOrderComponent } from "./components/place-order/place-order.component";
import { CheckoutGuard } from "./guards/checkout.guard";

export const AppRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [ SessionGuard ],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'product/:id',
                component: ProductComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'place-order',
                component: PlaceOrderComponent,
                canActivate: [ CheckoutGuard ]
            },
            {
                path: '**',
                component: ErrorPageComponent   
            }
        ]
    }
];