import { Injectable } from '@angular/core';
import { Storeswonders } from '../models/storeswonders';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreswondersService {
  url = 'http://localhost:3000/stores?category=wonders';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {}

  getStores() {
    return this.httpClient.get<Storeswonders[]>(`${this.url}`, this.httpOptions);
  }
}
