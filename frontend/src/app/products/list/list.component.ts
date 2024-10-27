import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AlertService, ProductService } from '@app/service';
import { Product } from '@app/models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  products?: any[];
  categories: { _id: string; name: string }[] = [];
  vendors: { _id: string; name: string }[] = [];

  constructor(
    private productService: ProductService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.productService
      .getAll()
      .pipe(first())
      .subscribe((products) => (this.products = products));

    this.productService
      .getCategories()
      .pipe(first())
      .subscribe((categories) => (this.categories = categories));

    this.productService
      .getVendors()
      .pipe(first())
      .subscribe((vendors) => (this.vendors = vendors));
  }

  getCategory(id: string) {
    return this.categories.find((ele) => ele._id === id)?.name;
  }

  getVendor(id: string) {
    return this.vendors.find((ele) => ele._id === id)?.name;
  }

  deleteProduct(id: string) {
    const product = this.products?.find((x) => x._id === id);
    product.isDeleting = true;
    this.productService
      .delete([id])
      .pipe(first())
      .subscribe({
        next: (data) => {
          this.products = this.productService.productValue as any;
          this.alertService.success('Deleted successful', true);
          product.isDeleting = false;
        },
        error: (error) => {
          this.alertService.error(error);
          product.isDeleting = false;
        },
      });
    // .subscribe(() => this.products = this.products!.filter(x => x._id !== id));
  }
}
