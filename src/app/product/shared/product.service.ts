import { Injectable } from '@angular/core';
import { products } from 'src/app/product';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor(){}

  getProducts(){
    return products;
  }

  getProductById(productId:number){
    return products[productId]
  }

}
