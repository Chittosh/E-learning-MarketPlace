import { Component } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],

})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
    product: Courses = new Courses();
  checkout:boolean=false;
    editing?: number =undefined;

    data?:any;


  errorMessage: any;

  constructor(public repository: ProductRepository,public orderRepo:OrderRepository, public order: Order,activeRoute: ActivatedRoute) {

      this.editing = activeRoute.snapshot.params['x']
      console.log(this.editing)

    if (this.editing!=undefined) {
      Object.assign(
        this.product,
        repository.getProduct(this.editing),
      );

      console.log(this.product)


  }
}

    submitOrder(form: any) {
      this.order.course = this.product;

    this.submitted = true;
    if (form.valid) {

      this.orderRepo
        .saveOrder(this.order)
        .subscribe({
          next: (order) => {
            this.order.clear();
            this.orderSent = true;
            this.submitted = false;
            console.log(order);
          },

          error: (error) => {
            //Error callback
            console.error('error caught in component');
            this.errorMessage = error;
            console.log(this.errorMessage);
          },
          complete: () => {
            console.error('post operation is done');
          },
        });
    }


}

  }









