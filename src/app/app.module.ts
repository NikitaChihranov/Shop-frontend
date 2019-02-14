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
import { AllOrdersComponent } from './core/order/all-orders/all-orders.component';
import {MenuComponent} from './main-menu/menu/menu.component';
import {ProfileComponent} from './main-menu/profile/profile.component';
import {GlobalSearchComponent} from './main-menu/global-search/global-search.component';
import { UserGetStatsComponent } from './core/stats/user-get-stats/user-get-stats.component';
import { GetAllUsersComponent } from './core/users/user-page-admin/get-all-users/get-all-users.component';
import { AllUsersComponent } from './core/users/all-users/all-users.component';
import { SuperAllUsersComponent } from './core/users/super-all-users/super-all-users.component';
import { UpdatedUserComponentComponent } from './core/users/updated-user-component/updated-user-component.component';
import { SearchUserComponent } from './core/users/user-page-admin/search-user/search-user.component';
import { SearchUserByLoginComponent } from './core/users/search-user-by-login/search-user-by-login.component';
import { CreateUserComponent } from './core/users/create-user/create-user.component';
import { CreateAdmiComponent } from './core/users/create-admi/create-admi.component';
import { UserInfoComponent } from './core/users/user-page-admin/user-info/user-info.component';
import { EachProducerComponent } from './core/producers/each-producer/each-producer.component';
import { SearchProducerComponent } from './core/producers/search-producer/search-producer.component';
import { SearchProducerByNameComponent } from './core/producers/search-producer-by-name/search-producer-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexComponent,
    AboutComponent,
    AllOrdersComponent,
    MenuComponent,
    ProfileComponent,
    GlobalSearchComponent,
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
