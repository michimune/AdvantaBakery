import { Injectable } from '@angular/core';
import { Product } from './product';

// Dummy data set
export const PRODUCTS: Product[] = [
  { id: 1, title: 'Carrot Cake', short_description: 'A scrumptious mini-carrot cake encrusted with sliced almonds', price: 8.99, image_name: 'carrot_cake.jpg' },
  { id: 2, title: 'Lemon Tart', short_description: 'A delicious lemon tart with fresh meringue cooked to perfection', price: 9.99, image_name: 'lemon_tart.jpg'},
  { id: 3, title: 'Cupcakes', short_description: 'Delectable vanilla and chocolate cupcakes', price: 5.99, image_name: 'cupcakes.jpg'},
  { id: 4, title: 'Bread', short_description: 'Fresh baked French-style bread', price: 1.49, image_name: 'bread.jpg' },
  { id: 6, title: 'Pear Tart', short_description: 'A glazed pear tart topped with sliced almonds and a dash of cinnamon', price: 5.99, image_name: 'pear_tart.jpg'},
  { id: 7, title: 'DeadLock Cake', short_description: 'Rich chocolate frosting cover this chocolate lover’s dream.', price: 8.99, image_name: 'chocolate_cake.jpg'},
  { id: 13, title: 'DeadLock Cake', short_description: 'Rich chocolate 2', price: 8.90, image_name: 'chocolate_cake.jpg'},
  { id: 16, title: 'Session Affinity Cake', short_description: 'Session', price: 8.99, image_name: 'bread.jpg'},
  //
];

@Injectable()
export class ProductService {
  getProducts() {
    return Promise.resolve(PRODUCTS);
  }

  getOneProduct(id: number) {
    return Promise.resolve(PRODUCTS.find(p => p.id === id));
  }
}
