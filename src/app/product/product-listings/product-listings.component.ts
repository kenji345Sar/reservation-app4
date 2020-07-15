import { Component, OnInit } from '@angular/core';
import {ProductService} from  '../shared/product.service.js';
import {products} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any

  // constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.products = products;
  }

}
