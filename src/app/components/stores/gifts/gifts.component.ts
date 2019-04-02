import { Component, OnInit } from '@angular/core';
import { StoresgiftsService } from '../../../services/storesgifts.service';
import { Storesgifts } from 'src/app/models/storesgifts';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styles: []
})
export class GiftsComponent implements OnInit {
  storesGiftsUniverse: Storesgifts[];

  constructor(private service: StoresgiftsService) {}

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesGiftsUniverse = data;
    });
  }
}
