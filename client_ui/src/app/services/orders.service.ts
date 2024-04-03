import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.ordersMicroservice;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private token = '';

  constructor(private http: HttpClient) {
  }

  public getOrders(): Promise<any[]> {
    this.token = localStorage.getItem('token') || '';
    return new Promise(async(resolve, reject) => {
      try {
        if (!this.token) {
          throw new Error('No token found');
        }
        const response = await lastValueFrom(this.http.get<any>(`${BASE_URL}/orders`, {
          headers: {
            'Authorization': this.token
          }
        }));
        return resolve(response['data'] || []);
      } catch (error) {
        console.error(error);
        return reject(error);
      }
    });
  }
}
