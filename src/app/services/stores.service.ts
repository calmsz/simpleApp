import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Storesgifts } from '../models/storesgifts';
import { Storesrestaurants } from '../models/storesrestaurants';
import { Storeswonders } from '../models/storeswonders';
import { Storessnacks } from '../models/storessnacks';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  giftsUrl = 'http://localhost:3000/stores?category=gifts';
  restaurantsUrl = 'http://localhost:3000/stores?category=restaurants';
  snacksUrl = 'http://localhost:3000/stores?category=snacks';
  wondersUrl = 'http://localhost:3000/stores?category=wonders';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {}

  getOpenStoresQuantity() {
    // WIP

    // this.httpClient.get<Storesgifts[]>(`${this.giftsUrl}`, this.httpOptions);
    // this.httpClient.get<Storesrestaurants[]>(`${this.restaurantsUrl}`, this.httpOptions);
    // this.httpClient.get<Storessnacks[]>(`${this.snacksUrl}`, this.httpOptions);
    // this.httpClient.get<Storeswonders[]>(`${this.wondersUrl}`, this.httpOptions);
  }
}
