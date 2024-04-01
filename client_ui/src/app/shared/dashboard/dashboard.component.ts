import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navbarCollapsed = true;
  searchText = '';
  user: any;
  cart:any[] = [];

  username = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.user = this.authService.isLogged ? this.authService.user : false;
    this.cart = this.cartService.getCart();
  }

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  search(event: Event) {
    event.preventDefault();
    if (!this.searchText) {
      return;
    }
    this.router.navigate(['/search'], {
      queryParams: {
        'search': this.searchText
      }
    });
  }

  async login() {
    const loginOk = await this.authService.login(this.username, this.password);
    if (loginOk) {
      this.user = this.authService.user;
    } else {
      this.password = '';
    }
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }

  getName(name: string) {
    return name.split(' ')[0];
  }

}
