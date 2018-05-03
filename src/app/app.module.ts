import { forwardRef, NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService, PRODUCTS } from './product-service.service';
import { AppComponent, routing } from './app.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
