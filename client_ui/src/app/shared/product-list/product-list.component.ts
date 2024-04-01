import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any[] = [];
  
  constructor(
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  getCents(price: number) {
    return (price - Math.floor(price))*10;
  }

  getRating(rating: number) {
    const rounded = Math.round(rating*2) / 2;
    return Array(5).fill(1).map((_, index) => index + 1).map((star) => {
      if (rounded >= star) {
        return 'fas fa-star';
      } else if (rounded*2 % 2 == 1 && (rounded + 1) > star) {
        return 'fas fa-star-half-alt';
      }
      return 'far fa-star';
    });
  }

  goTo(productId: string) {
    this.router.navigate(['product', productId]);
  }

  addToCart(index: number) {
    this.products[index].isAdding = true;
    setTimeout(() => {
      this.cartService.addItem(this.products[index]);
      this.products[index].isAdding = false;
    }, 1200);
  }
}
