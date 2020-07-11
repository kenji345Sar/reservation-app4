import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';



const routes: Routes = [

  { path: '', redirectTo:'products' ,pathMatch:'full'},
];

@NgModule({
  imports: [
    ProductModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
