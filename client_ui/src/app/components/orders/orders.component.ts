import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];
  isLoaded = false;

  constructor(
    private ordersService: OrdersService
    ) { }

  async ngOnInit() {
    try {
      this.orders = await this.ordersService.getOrders();
    } catch (error) {
      this.orders = [];
    } finally {
      this.isLoaded = true;
    }
  }

}
