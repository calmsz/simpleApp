import { Component, OnInit } from '@angular/core';
import { StoreswondersService } from 'src/app/services/storeswonders.service';
import { Storeswonders } from 'src/app/models/storeswonders';

@Component({
  selector: 'app-wonders',
  template: `
    <p>
      wonders works!
    </p>
  `,
  styles: []
})
export class WondersComponent implements OnInit {
  storesWondersUniverse: Storeswonders[];

  constructor(private service: StoreswondersService) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesWondersUniverse = data;
    });
  }

}
