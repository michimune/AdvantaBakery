import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  featured: Product;

  title = 'Fourth Coffee and Bakery!';

  constructor(private _productService: ProductService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this._productService.getProducts().then((dbProducts: Product[]) => {
      this.products = dbProducts;
      var fi = Math.floor((Math.random() * this.products.length));
      this.featured = this.products[fi];
    });
  }
}
