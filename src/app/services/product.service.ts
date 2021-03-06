import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../core/models/product';
import {Category} from '../core/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = 'http://localhost:3000/';
  constructor(private http: HttpClient) {
  }

  getAllProducts(limit: number, skip: number): Observable<Product[]> {
    return this.http.get <Product[]>(`${this.host}products/limit/${limit}/skip/${skip}`);
  }

  getProductByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.host}products/${name}`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.host}products/id/${id}`);
  }
  getProductsByAuthor(id: string, dateFrom: Date, dateTo: Date): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}products/author/${id}/from/${dateFrom}/to/${dateTo}`);
  }
  getProductsByAuthor1(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.host}products/author1/${id}`);
  }
  createProduct(product: Product, id: string): Observable<Product> {
    product.userIdAuthor = id;
    product.date = Date.now();
    return this.http.post<Product>(`${this.host}products`, product);
  }

  addPhotos(photos: File[], product: Product): Observable<Product> {
    const formData: FormData = new FormData();
       for (const photo of photos) {
       formData.append('photos', photo, photo.name);
    }
     let id = product._id;
    return this.http.post<Product>(`${this.host}products/upload/${id}`, formData);
  }
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.host}products/${id}`, product);
  }
  updatePhotos(photos: File[], product: Product): Observable<Product> {
    const formData: FormData = new FormData();
    for (const photo of photos) {
      formData.append('photos', photo, photo.name);
    }
    let id = product._id;
    console.log(`${this.host}products/updatePhotos/${id}`);
    return this.http.put<Product>(`${this.host}products/updatePhotos/${id}`, formData);
  }

deleteProduct(id: string): Observable<Product> {
  return this.http.delete<Product>(`${this.host}products/${id}`);
}

deleteAllProducts(): Observable<Product[]> {
  // @ts-ignore
  return this.http.post<Product[]>(`${this.host}products/deleteAll`);
}
}
