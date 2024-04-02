import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  constructor(
  ) { 
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if (savedCart && Array.isArray(savedCart)) {
      this.cart = savedCart;
    } else {
      this.cart = [];
    }
  }

  public getCart() {
    return this.cart;
  }

  public addItem(item: any) {
    this.cart.push(item);
    this.save();
  }

  public removeItem(index: number) {
    this.cart.splice(index, 1);
    this.save();
  }

  public clearCart() {
    this.cart = [];
    this.save();
  }

  private save() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
