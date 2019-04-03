import { Injectable } from '@angular/core';
import { Storesrestaurants } from '../models/storesrestaurants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresrestaurantsService {
  url = 'http://localhost:3000/stores?category=restaurants';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {}

  getStores() {
    return this.httpClient.get<{stores: Storesrestaurants[]}>(`${this.url}`, this.httpOptions);
  }
}
