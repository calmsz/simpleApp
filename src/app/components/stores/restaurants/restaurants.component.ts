import { Component, OnInit } from '@angular/core';
import { StoresrestaurantsService } from '../../../../app/services/storesrestaurants.service';
import { Storesrestaurants } from '../../../../app/models/storesrestaurants';
import { Storeavailability } from '../../../../app/helpers/storeavailability';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styles: []
})
export class RestaurantsComponent implements OnInit {
  storesRestaurantsUniverse: Storesrestaurants[];
  storesDisplayInfo = new Array();
  storesRestaurantsUniverseLoaded: Promise<boolean>;

  constructor(private service: StoresrestaurantsService, private storeAvailability: Storeavailability) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesRestaurantsUniverse = data.stores;

      this.storesRestaurantsUniverse.map((store) => {
        const message = (this.storeAvailability.isOpen(store)) ?
          'Open right now' :
          this.storeAvailability.nextDayOpen(store);
        this.storesDisplayInfo.push ({store, message});
      });

      this.storesDisplayInfo.sort((a, b) => {
        return (a.message >= b.message) ? -1 : 1;
      });
      this.storesRestaurantsUniverseLoaded = Promise.resolve(true);
    });
  }

}
