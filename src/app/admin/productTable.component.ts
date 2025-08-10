import { Component } from '@angular/core';
import { Courses } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'productTableComponent',
  templateUrl: 'productTable.component.html',
  styleUrls:['productTable.component.css']
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {}

  getProducts(): Courses[] {
    return this.repository.getProducts();
  }

  deleteProduct(id?: number) {
    // 1
    this.repository.deleteProduct(id);
  }
}
