import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
  selector: "orderTableComponent",
  templateUrl: "orderTable.component.html",
  styleUrls:['orderTable.component.css']
})
export class OrderTableComponent {
  includeShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    return this.repository
      .getOrders()
  }

  delete(id?: number) {
    this.repository.deleteOrder(id);
  }
}
