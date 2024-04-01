import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId = '';
  product: any = {};
  isLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async(params) => {
      if (params.get('id')) {
        this.productId = params.get('id') || '';
        try {
          this.isLoaded = false;
          this.product = await this.productsService.getProduct(this.productId);
          this.isLoaded = true;
        } catch (error) {
          console.error(error);
          this.router.navigate(['not-found']);
        }
      }
    });
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

  addToCart() {
    this.product.isAdding = true;
    setTimeout(() => {
      this.cartService.addItem(this.product);
      this.product.isAdding = false;
    }, 1200);
  }

}
