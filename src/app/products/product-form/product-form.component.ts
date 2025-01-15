import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productname: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      unit: ['', Validators.required],
      // <-- FormArray for dynamic fields
      priceOptions: this.fb.array([])
    });
  }

  // Getter for the priceOptions FormArray
  get priceOptions(): FormArray {
    return this.productForm.get('priceOptions') as FormArray;
  }

  // Add a new group of two fields
  addPriceOption(): void {
    this.priceOptions.push(
      this.fb.group({
        optionName: ['', Validators.required],
        optionValue: ['', Validators.required]
      })
    );
  }

  // Remove one group by index
  removePriceOption(index: number): void {
    this.priceOptions.removeAt(index);
  }
  
}
