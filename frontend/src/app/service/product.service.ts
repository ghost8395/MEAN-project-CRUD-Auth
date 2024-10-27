import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Product } from '@app/models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productSubject: BehaviorSubject<Product[] | null>;
  public products: Observable<Product[] | null>;

  private categoriesSubject: BehaviorSubject<any[]>;
  public categories: Observable<any[]> | undefined;

  private venodrSubject: BehaviorSubject<any[]>;
  public venodrs: Observable<any[]> | undefined;

  constructor(private router: Router, private http: HttpClient) {
    this.productSubject = new BehaviorSubject([] as any);
    this.products = this.productSubject.asObservable();

    this.categoriesSubject = new BehaviorSubject([] as any);
    this.categories = this.categoriesSubject.asObservable();

    this.venodrSubject = new BehaviorSubject([] as any);
    this.venodrs = this.venodrSubject.asObservable();
  }

  public get productValue() {
    return this.productSubject.value;
  }

  public get categoriesValue() {
    return this.categoriesSubject.value;
  }

  public get venodrsValue() {
    return this.venodrSubject.value;
  }

  getAll() {
    return this.http.get<Product[]>(`${environment.apiUrl}/product`).pipe(
      map((products) => {
        this.productSubject.next(products);
        return products;
      })
    );
  }

  getCharts() {
    return this.http.get<any[]>(`${environment.apiUrl}/charts`).pipe(
      map((charts) => {
        return charts;
      })
    );
  }

  getCategories() {
    return this.http.get<any[]>(`${environment.apiUrl}/category`).pipe(
      map((categories) => {
        this.categoriesSubject.next(categories);
        return categories;
      })
    );
  }

  getVendors() {
    return this.http.get<any[]>(`${environment.apiUrl}/vendor`).pipe(
      map((venodrs) => {
        this.venodrSubject.next(venodrs);
        return venodrs;
      })
    );
  }

  update(product: any) {
    return this.http.put(`${environment.apiUrl}/product`, [product]).pipe(
      map((x: any) => {
        this.productSubject.next(
          this.productSubject.value?.map((productItem: any) =>
            productItem._id === x.products[0]._id ? x.products[0] : productItem
          ) as any
        );
        return x;
      })
    );
  }

  create(product: any) {
    return this.http.post(`${environment.apiUrl}/product`, [product]).pipe(
      map((x: any) => {
        this.productSubject.next(
          (this.productSubject.value as any)?.push(x.products[0])
        );
        return x;
      })
    );
  }

  delete(ids: string[]) {
    return this.http
      .delete(`${environment.apiUrl}/product`, {
        body: ids.map((id) => ({ _id: id })),
      })
      .pipe(
        map((x) => {
          this.productSubject.next(
            this.productSubject.value?.filter(
              (product: any) => !ids.includes(product._id)
            ) as any
          );
          return x;
        })
      );
  }
}
