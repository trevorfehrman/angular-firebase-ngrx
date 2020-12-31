import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = '';
  isDisabled = true;
  products = [];
  private productsSubscription: Subscription;

  onAddProduct(form) {
    if (form.valid) {
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((product) => product !== productName);
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
