import { Component } from '@angular/core';
import{ImageService} from "../services/image/image.service";
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];



  share(link:string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
  nextImage(a:number){
    if(products[a].i < 2){
      products[a].i += 1;
    }
    else{
      products[a].i = 0;
    }

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/