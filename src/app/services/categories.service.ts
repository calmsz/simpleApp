import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Storesgifts } from '../models/storesgifts';
import { Storesrestaurants } from '../models/storesrestaurants';
import { Storeswonders } from '../models/storeswonders';
import { Storessnacks } from '../models/storessnacks';
import { Categories } from '../models/categories';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUrl = 'http://localhost:3000/categories';
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

  getCategoriesAndStores(): Observable<any[]> {
    const categories$ = this.httpClient.get<Categories[]>(`${this.categoriesUrl}`, this.httpOptions);
    const gifts$ = this.httpClient.get<Storesgifts[]>(`${this.giftsUrl}`, this.httpOptions);
    const restaurants$ = this.httpClient.get<Storesrestaurants[]>(`${this.restaurantsUrl}`, this.httpOptions);
    const snacks$ = this.httpClient.get<Storessnacks[]>(`${this.snacksUrl}`, this.httpOptions);
    const wonders$ = this.httpClient.get<Storeswonders[]>(`${this.wondersUrl}`, this.httpOptions);

    return forkJoin([categories$, gifts$, restaurants$, snacks$, wonders$]);
  }
}
