import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path:'products',component:ProductComponent,
    children:[
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductDetailComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductModule { }
