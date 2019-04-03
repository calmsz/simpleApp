import { Injectable } from '@angular/core';
import { Storessnacks } from '../models/storessnacks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoressnacksService {
  url = 'http://localhost:3000/stores?category=snacks';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) {}

  getStores() {
    return this.httpClient.get<{stores: Storessnacks[]}>(`${this.url}`, this.httpOptions);
  }
}
