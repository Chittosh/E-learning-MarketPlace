
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    Order,
    OrderRepository,
    AuthService,

    RestDataSource,
  ],
})
export class ModelModule {}

// services are called as shared(by nature)
