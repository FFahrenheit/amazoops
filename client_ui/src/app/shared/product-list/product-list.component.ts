import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  getCents(price: number) {
    return (price - Math.floor(price))*10;
  }

  getRating(rating: number) {
    const rounded = Math.round(rating*2) / 2;
    console.log(rating, rounded);
    return Array(5).fill(1).map((star, index) => {
      if ((rounded >= (index + 1))) {
        return 'fas fa-star';
      } else if (rounded*2 % 2 == 1 && (rounded + 1) > (index + 1)) {
        return 'fas fa-star-half-alt';
      }
      return 'far fa-star';
    });
  }

}
