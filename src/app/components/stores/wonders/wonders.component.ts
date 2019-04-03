import { Component, OnInit } from '@angular/core';
import { StoreswondersService } from '../../../../app/services/storeswonders.service';
import { Storeswonders } from '../../../../app/models/storeswonders';
import { Storeavailability } from '../../../../app/helpers/storeavailability';

@Component({
  selector: 'app-wonders',
  templateUrl: './wonders.component.html',
  styles: []
})
export class WondersComponent implements OnInit {
  storesWondersUniverse: Storeswonders[];
  storesDisplayInfo = new Array();
  storesWondersUniverseLoaded: Promise<boolean>;

  constructor(private service: StoreswondersService, private storeAvailability: Storeavailability) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesWondersUniverse = data.stores;

      this.storesWondersUniverse.map((store) => {
        const message = (this.storeAvailability.isOpen(store)) ?
          'Open right now' :
          this.storeAvailability.nextDayOpen(store);
        this.storesDisplayInfo.push ({store, message});
      });

      this.storesDisplayInfo.sort((a, b) => {
        return (a.message >= b.message) ? -1 : 1;
      });
      this.storesWondersUniverseLoaded = Promise.resolve(true);
    });
  }

}
