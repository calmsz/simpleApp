import { Component, OnInit } from '@angular/core';
import { StoresgiftsService } from '../../../services/storesgifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styles: []
})
export class GiftsComponent implements OnInit {

  constructor(private service: StoresgiftsService) {}

  ngOnInit() {
    this.service.getStores().subscribe( (data) =>
      console.log(data)
    );
  }

}
