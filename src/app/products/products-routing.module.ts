import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {ExistingProductsComponent} from './existing-products/existing-products.component';
import {FutureProductsComponent} from './future-products/future-products.component';
// import {OurProductsComponent} from './our-products/our-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  // { path: 'ourProducts', component: OurProductsComponent}
  { path: 'existing-products', component: ExistingProductsComponent },
  { path: 'future-products', component: FutureProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
