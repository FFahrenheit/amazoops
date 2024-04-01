import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  user: any;
  
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.user = this.authService.isLogged ? this.authService.user : null;
  }

  getTotal() {
    return this.cart.reduce((acc, obj) => acc + obj.price, 0);
  }

}
