import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../products";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  onRemoveClick(): void {
    this.remove.emit(this.product);
  }

  likesProduct(product: Product){
    product.likes++;
  }

}