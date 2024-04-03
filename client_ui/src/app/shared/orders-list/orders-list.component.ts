import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  @Input() public orders: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
