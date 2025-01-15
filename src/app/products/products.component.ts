import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.loadAllProducts();
  }
  loadAllProducts(){
    this.productService.loadProducts().subscribe(
      {
      next: (data) => this.products = data
    }
  
  )
  }
}
