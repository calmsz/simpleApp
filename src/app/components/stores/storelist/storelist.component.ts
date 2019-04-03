import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-storelist',
  template: `
  <div class="card">
    <h1>{{storeExtended.store.name}}</h1>
    <p class="title">{{storeExtended.store.description}}</p>
    <p>{{storeExtended.message}}</p>
  </div>
  `,
  styles: []
})
export class StorelistComponent implements OnInit {
  @Input() storeExtended: any;
  constructor() { }

  ngOnInit() {
  }

}
