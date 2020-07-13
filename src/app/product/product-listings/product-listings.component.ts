import { Component, OnInit } from '@angular/core';
import {products} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}
