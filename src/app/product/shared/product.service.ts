import { Injectable } from '@angular/core';
import { products } from 'src/app/product';

@Injectable()
export class ProductService {

  constructor(){}

  getProducts(){
    return products;
  }

}
