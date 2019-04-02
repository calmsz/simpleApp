import { Component, OnInit } from '@angular/core';
import { StoresrestaurantsService } from 'src/app/services/storesrestaurants.service';
import { Storesrestaurants } from 'src/app/models/storesrestaurants';

@Component({
  selector: 'app-restaurants',
  template: `
    <p>
      restaurants works!
    </p>
  `,
  styles: []
})
export class RestaurantsComponent implements OnInit {
  storesRestaurantsUniverse: Storesrestaurants[];

  constructor(private service: StoresrestaurantsService) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesRestaurantsUniverse = data;
    });
  }

}
