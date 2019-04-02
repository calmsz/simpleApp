import { Component, OnInit } from '@angular/core';
import { Storessnacks } from 'src/app/models/storessnacks';
import { StoressnacksService } from 'src/app/services/storessnacks.service';

@Component({
  selector: 'app-snacks',
  template: `
    <p>
      snacks works!
    </p>
  `,
  styles: []
})
export class SnacksComponent implements OnInit {
  storesSnacksUniverse: Storessnacks[];

  constructor(private service: StoressnacksService) { }

  ngOnInit() {
    this.service.getStores().subscribe((data) => {
      this.storesSnacksUniverse = data;
    });
  }

}
