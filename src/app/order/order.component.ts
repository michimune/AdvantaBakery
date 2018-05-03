import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private subscriber: any;
  private product: Product;
  private orders = [];

  quantity: number;
  orderTotal: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.quantity = 1;
  }

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
      let id = parseInt(params['id']);
      console.log(id);

//      this.productService.getOneProduct(id).subscribe(p => this.product = p);
      this.productService.getOneProduct(id).then(p => {
        this.product = p;
        console.log('title = ' + this.product.title);
        this.orderTotal = (this.product.price * this.quantity).toFixed(2);
      });
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  calculateTotal(newValue) {
    //console.log('calculate: newValue=' + newValue);
    var n = parseInt(newValue);
    if (isNaN(n) || n < 0) {
      n = 0;
    } else if (n > 100) {
      n = 100;
    }
    this.quantity = n;
    this.orderTotal = (this.product.price * this.quantity).toFixed(2);
  }

  placeOrder() {
    var existingOrder = this.orders.find(o => o.name === this.product.title);
    if (existingOrder) {
      /*
      for(var i = 0; i < 10000000; i++) {
        existingOrder.quantity++;
        existingOrder.quantity--;
      }
      */
      existingOrder.quantity++;
    }
    else {
      /*
      for(var i = 0; i < 10000000; i++) {
        this.orders.push({ name: this.product.title, quantity: 1});
        this.orders.pop();
      }
      */
      this.orders.push({ name: this.product.title, quantity: 1});
    }
  }
}
