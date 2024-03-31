import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText = '';
  products = [];
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(async(params) => {
      if (params.get('search')) {
        this.searchText = params.get('search') || '';
        this.isLoaded = false;
        this.products = await this.productsService.searchProducts(this.searchText);
        this.isLoaded = true;
      }
    });
  }

}
