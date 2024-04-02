import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  cart: any[] = [];
  user: any;

  model:any = {
    address: '',
    name: '',
    number: '',
    expiration: '',
    cvv: ''
  };
  isInvalid = false;

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

  public checkout() {
    this.isInvalid = !! Object.keys(this.model).find(input => !this.model[input]);
    if (this.isInvalid) {
      return;
    }
    console.log('Checking out...');
  }

}
