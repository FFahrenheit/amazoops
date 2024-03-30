import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderSpinnerComponent } from './shared/loader-spinner/loader-spinner.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoaderSpinnerComponent,
    DashboardComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
