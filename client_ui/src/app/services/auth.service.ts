import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.ordersMicroservice;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged = false;
  public user: any;
  private token = '';

  constructor(private http: HttpClient) {
  }

  public checkLogged(): Promise<boolean> {
    this.token = localStorage.getItem('token') || '';
    return new Promise(async(resolve, reject) => {
      try {
        if (!this.token) {
          throw new Error('No token found');
        }
        const response = await lastValueFrom(this.http.get<any>(`${BASE_URL}/users/session`, {
          headers: {
            'Authorization': this.token
          }
        }));
        if (response.success && response.data) {
          this.isLogged = true;
          this.user = response.data;
        } else {
          this.isLogged = false;
        }
      } catch (error) {
        this.isLogged = false;
        console.log(error);
      } finally {
        resolve(true);
      }
    });
  }

  public login(username: string, password: string) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await lastValueFrom(this.http.post<any>(`${BASE_URL}/users/login`, {
          username, password
        }));
        if (response.success && response.data) {
          this.isLogged = true;
          this.user = response.data;
          this.token = 'Bearer ' + response.data.token;
          localStorage.setItem('token', this.token);
          return resolve(true);
        }
        this.isLogged = false;
        return resolve(false);
      } catch (error) {
        this.isLogged = false;
        console.log(error);
        return resolve(false);
      }
    });
  }

  public logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.user = null;
    this.isLogged = false;
  }

}
