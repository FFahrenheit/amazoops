import { Routes } from "@angular/router";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        component: ErrorPageComponent   
    }
];