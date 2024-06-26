import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedProducts = [];

  constructor(private productsService: ProductsService) { }

  async ngOnInit() {
    this.recommendedProducts = await this.productsService.getAllProducts()
  }

}
