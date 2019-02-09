import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {ProductsRoutingModule} from './products-routing.module';
import {RouterModule} from '@angular/router';
import {ViewProductComponent} from './view-product/view-product.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }