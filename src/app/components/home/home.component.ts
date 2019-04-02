import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { Storesgifts } from 'src/app/models/storesgifts';
import { Storesrestaurants } from 'src/app/models/storesrestaurants';
import { Storessnacks } from 'src/app/models/storessnacks';
import { Storeswonders } from 'src/app/models/storeswonders';
import { Schedules } from 'src/app/models/schedules';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  categoriesUniverse = {
    info: new Array(Categories),
    gifts: new Array(Storesgifts),
    restaurants: new Array(Storesrestaurants),
    snacks: new Array(Storessnacks),
    wonders: new Array(Storeswonders),
  };
  ourDays = {
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  };
  es6Days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  TODAY: number;

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDay();
  currentHour = new Date().getHours();
  currentMinutes = new Date().getMinutes();
  currentTimeToCompare = new Date(this.currentYear, this.currentMonth, this.currentDay, this.currentHour, this.currentMinutes, 0, 0);

  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.TODAY = this.ourDays[this.es6Days[new Date().getDay()]];

    this.service.getCategoriesAndStores().subscribe(CategoriesAndStores => {
      this.categoriesUniverse.info = CategoriesAndStores[0];
      this.categoriesUniverse.gifts = CategoriesAndStores[1].stores;
      this.categoriesUniverse.restaurants = CategoriesAndStores[2].stores;
      this.categoriesUniverse.snacks = CategoriesAndStores[3].stores;
      this.categoriesUniverse.wonders = CategoriesAndStores[4].stores;

      this.showInfo();
  });
  }

  showInfo(): void {

    let giftCategorySleep = this.categoriesUniverse['gifts'].some(this.atLeastOneOpen);
    console.log(this.categoriesUniverse['gifts'], giftCategorySleep);
  }


  atLeastOneOpen = (store) => {
    if (!!!store.schedule[this.TODAY]) {
      return false;
    }
    const storeOpenHour = store.schedule[this.TODAY].open.split(':')[0];
    const storeOpenMinutes = store.schedule[this.TODAY].open.split(':')[1];
    const storeOpenTime = new Date(this.currentYear, this.currentMonth, this.currentDay, storeOpenHour, storeOpenMinutes, 0, 0);

    const storeCloseHour = store.schedule[this.TODAY].close.split(':')[0];
    const storeCloseMinutes = store.schedule[this.TODAY].close.split(':')[1];
    const storeCloseTime = new Date(this.currentYear, this.currentMonth, this.currentDay, storeCloseHour, storeCloseMinutes, 0, 0);

    return (storeCloseTime > this.currentTimeToCompare) && (storeOpenTime < this.currentTimeToCompare);
  }




}
