import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import {ProductItemComponent} from "../product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categoryName!: string;
  private products = products;

  getProductsByCategory(categoryName: string | undefined): Product[] {
    return this.products.filter(product => product.category === categoryName);
  }
  removeProduct(productToRemove: Product){
    this.products = this.products.filter(product => product !== productToRemove)
  }
}
