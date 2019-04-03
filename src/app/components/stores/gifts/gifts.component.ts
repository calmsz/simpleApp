import { Component, OnInit } from '@angular/core';
import { StoresgiftsService } from '../../../services/storesgifts.service';
import { Storesgifts } from '../../../../app/models/storesgifts';
import { Storeavailability } from '../../../../app/helpers/storeavailability';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styles: []
})
export class GiftsComponent implements OnInit {
  storesGiftsUniverse: Storesgifts[];
  storesDisplayInfo = new Array();
  storesGiftsUniverseLoaded: Promise<boolean>;

  constructor(private service: StoresgiftsService, private storeAvailability: Storeavailability) {}

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesGiftsUniverse = data.stores;

      this.storesGiftsUniverse.map((store) => {
        const message = (this.storeAvailability.isOpen(store)) ?
          'Open right now' :
          this.storeAvailability.nextDayOpen(store);
        this.storesDisplayInfo.push ({store, message});
      });

      this.storesDisplayInfo.sort((a, b) => {
        return (a.message >= b.message) ? -1 : 1;
      });
      this.storesGiftsUniverseLoaded = Promise.resolve(true);
    });
  }
}
