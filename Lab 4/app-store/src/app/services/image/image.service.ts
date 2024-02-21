import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  static getIphone13():string[]{
    return [
        '/assets/images/download.jpeg',
        '/assets/images/iphone13-2.jpeg',
        '/assets/images/iphone13-3.jpeg'
        ]
  }
  getIphone13pro():string[]{
    return [
      '/assets/images/iphone13-1.jpeg',
      '/assets/images/iphone13-2.jpeg',
      '/assets/images/iphone13-3.jpeg'
    ]
  }
  constructor() { }


}
