import { Component, OnInit } from '@angular/core';
import { Storessnacks } from '../../../../app/models/storessnacks';
import { StoressnacksService } from '../../../../app/services/storessnacks.service';
import { Storeavailability } from '../../../../app/helpers/storeavailability';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styles: []
})
export class SnacksComponent implements OnInit {
  storesSnacksUniverse: Storessnacks[];
  storesDisplayInfo = new Array();
  storesSnacksUniverseLoaded: Promise<boolean>;

  constructor(private service: StoressnacksService, private storeAvailability: Storeavailability) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesSnacksUniverse = data.stores;

      this.storesSnacksUniverse.map((store) => {
        const message = (this.storeAvailability.isOpen(store)) ?
          'Open right now' :
          this.storeAvailability.nextDayOpen(store);
        this.storesDisplayInfo.push ({store, message});
      });

      this.storesDisplayInfo.sort((a, b) => {
        return (a.message >= b.message) ? -1 : 1;
      });
      this.storesSnacksUniverseLoaded = Promise.resolve(true);
    });
  }

}
