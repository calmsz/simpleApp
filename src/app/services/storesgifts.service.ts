import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storesgifts } from '../models/storesgifts';

@Injectable({
  providedIn: 'root'
})
export class StoresgiftsService {
  url = 'http://localhost:3000/stores?category=gifts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {}

  getStores() {
    return this.httpClient.get<{stores: Storesgifts[]}>(`${this.url}`, this.httpOptions);
  }
}
