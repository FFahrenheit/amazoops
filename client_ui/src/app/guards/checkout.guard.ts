import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cart = this.cartService.getCart();
      console.log(cart, this.authService.isLogged, this.authService.user)
      if (!cart || cart.length <= 0 || !this.authService.isLogged) {
        this.router.navigate([]);
      }
    return true;
  }
  
}
