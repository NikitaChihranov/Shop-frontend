import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index/index.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MainMenuRoutingModule} from './main-menu/main-menu-routing.module';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import { CreateOrderComponent } from './core/order/create-order/create-order.component';
import { AllOrdersComponent } from './core/order/all-orders/all-orders.component';
import { UpdateOrderComponent } from './core/order/update-order/update-order.component';
import { UpdatedPageComponent } from './updated-page/updated-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexComponent,
    AboutComponent,
    AllOrdersComponent,
    UpdatedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainMenuRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
