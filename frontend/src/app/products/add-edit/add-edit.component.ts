import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ProductService, AlertService } from '@app/service';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;
  categories: any[] = [];
  venodrs: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.categories = this.productService.categoriesValue;
    this.venodrs = this.productService.venodrsValue;
    // form with validation rules
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      currency: ['', [Validators.required, Validators.minLength(3)]],
      discount: ['', [Validators.required, Validators.min(0)]],
      size: ['', Validators.required],
      category: ['', Validators.required],
      vendor: ['', Validators.required],
    });

    this.title = 'Add Product';
    if (this.id) {
      // edit mode
      this.title = 'Edit Product';
      let product: any = this.productService.productValue?.find(
        (ele) => ele._id === this.id
      );
      product.category = this.getCategory(product?.category);
      product.vendor = this.getVendor(product?.vendor);
      this.form.patchValue(product as any);
    }
  }

  getCategory(id: string) {
    return this.productService.categoriesValue.find((ele) => ele._id === id)
      ?.name;
  }

  getVendor(id: string) {
    return this.productService.venodrsValue.find((ele) => ele._id === id)?.name;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.saveProduct()
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Product saved', true);
          this.router.navigateByUrl('/products');
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.submitting = false;
        },
      });
  }

  private saveProduct() {
    // create or update product based on id param
    return this.id
      ? this.productService.update({
          _id: this.id,
          ...this.form.value,
          category: this.categories.find(
            (cat) => this.form.value.category === cat.name
          )._id,
          vendor: this.venodrs.find(
            (vend) => this.form.value.vendor === vend.name
          )._id,
        })
      : this.productService.create({
          ...this.form.value,
          category: this.categories.find(
            (cat) => this.form.value.category === cat.name
          )._id,
          vendor: this.venodrs.find(
            (vend) => this.form.value.vendor === vend.name
          )._id,
        });
  }
}
