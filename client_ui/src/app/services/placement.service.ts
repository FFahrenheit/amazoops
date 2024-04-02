import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.placementMicroservice;

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http: HttpClient) { }

  placeOrder(model: any, products: any) : Promise<any> {
    return new Promise(async(resolve, reject) => {
      try {
        const body = {
          products,
          address: model.address,
          payment: {
            name: model.name, 
            number: model.number,
            expiration: model.expiration,
            cvv: model.cvv
          }
        };
        console.log(body);
        const request = this.http.post(`${BASE_URL}/checkout`, body, {
          headers: {
            'Authorization': localStorage.getItem('token') || ''
          }
        })
        const response = await lastValueFrom(request) as any;
        return resolve(response['data'] || {});
      } catch(error) {
        console.error(error);
        return reject(error);
      }
    });
  }
}
