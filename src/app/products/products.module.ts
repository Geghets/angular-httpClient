import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { OurProductsComponent } from './our-products/our-products.component';
import {FormsModule} from '@angular/forms';
import { ExistingProductsComponent } from './existing-products/existing-products.component';
import { FutureProductsComponent } from './future-products/future-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    OurProductsComponent,
    ExistingProductsComponent,
    FutureProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
