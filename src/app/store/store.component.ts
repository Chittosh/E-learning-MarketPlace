import { Component } from "@angular/core";
import { Courses } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Router } from "@angular/router";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  styleUrls:['store.component.css']
})
export class StoreComponent {
  // selectedCategory: string | undefined;

  // public productsPerPage = 4;
  // public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private router: Router
  ) {}

  get products(): Courses[] {
    // let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts();
      // .slice(pageIndex, pageIndex + this.productsPerPage);
  }
   scrollToCourses() {
  const coursesSection = document.getElementById('courses');
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

  // get categories(): string[] {
  //   return this.repository.getCategories();
  // }

  // changeCategory(newCategory?: string) {
  //   this.selectedCategory = newCategory;
  // }

  // get pageNumbers(): number[] {
  //   return Array(
  //     Math.ceil(
  //       this.repository.getProducts(this.selectedCategory).length /
  //         this.productsPerPage
  //     )
  //   )
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  addProductToCart(product: Courses) {
    this.router.navigateByUrl("/cart");
  }
}
