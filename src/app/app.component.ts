import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product-service.service';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'order/:id', component: OrderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
