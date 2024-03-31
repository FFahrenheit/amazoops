import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.productsMicroservice;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Promise<any> {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await lastValueFrom(this.http.get(`${BASE_URL}/products/all`)) as any;
        return resolve(response['data'] || []);
      } catch(error) {
        console.error(error);
        return reject(error);
      }
    });
  }
}
