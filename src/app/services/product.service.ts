import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

private http = inject(HttpClient);
private productsCache = new BehaviorSubject<Product[]>([]);
private url = "https://677e164a94bde1c1252a4ef1.mockapi.io/products";
private categoriesCache = new BehaviorSubject<string[]>([]);
constructor(){
}

loadProducts():Observable<Product[]>{
  if(!this.productsCache.value.length){
   return  this.http.get<Product[]>(this.url).pipe(
      tap((products: Product[]) => {
        this.productsCache.next(products);
      const categories = [...new Set(products.map(item => item.category))]
        this.categoriesCache.next(categories);
    })
    )
}else{
  return this.productsCache.asObservable();
}
}

getProducts(): Observable<Product[]> {
  return this.productsCache.asObservable();
}
getCategories(): Observable<string[]>{
  return this.categoriesCache.asObservable();
}




}
