import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Courses } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'productEditorComponent',
  templateUrl: 'productEditor.component.html',
  styleUrls:['productEditor.component.css']
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Courses = new Courses(); // stores info for 1st record

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute,
  ) {
    this.editing = activeRoute.snapshot.params['x'] == 'edit'; // true

    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params['y']),
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
