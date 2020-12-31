import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  onClicked() {
    this.productsService.deleteProduct(this.productName);
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
}
