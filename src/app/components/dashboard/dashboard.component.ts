import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productSerivce = inject(ProductService);


  ngOnInit(): void {
    this.fetchCategories();
  }

   fetchCategories(){
    this.productSerivce.getCategories().subscribe({
      next: (data) => console.log(data)
    })
  }
} 
