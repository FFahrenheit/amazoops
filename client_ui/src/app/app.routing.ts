import { Routes } from "@angular/router";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";
import { SearchComponent } from "./components/search/search.component";
import { ProductComponent } from "./components/product/product.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
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
            }
        ]
    },
    {
        path: '**',
        component: ErrorPageComponent   
    }
];