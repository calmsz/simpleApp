import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { Storesgifts } from 'src/app/models/storesgifts';
import { Storesrestaurants } from 'src/app/models/storesrestaurants';
import { Storessnacks } from 'src/app/models/storessnacks';
import { Storeswonders } from 'src/app/models/storeswonders';
import { Storeavailability } from 'src/app/helpers/storeavailability';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  categoriesUniverse = {
    info: {categories: new Array(Categories)},
    gifts: new Array(Storesgifts),
    restaurants: new Array(Storesrestaurants),
    snacks: new Array(Storessnacks),
    wonders: new Array(Storeswonders),
  };

  storesImagesSrcLoaded: Promise<boolean>;

  giftsCategoryOpen = true;
  restaurantsCategoryOpen = true;
  snacksCategoryOpen = true;
  wondersCategoryOpen = true;
  storesImagesSrc = {
    gifts: {open: '', sleep: ''},
    restaurants: {open: '', sleep: ''},
    snacks: {open: '', sleep: ''},
    wonders: {open: '', sleep: ''},
  };

  constructor(private service: CategoriesService, private storeAvailability: Storeavailability) { }

  ngOnInit() {
    this.service.getCategoriesAndStores().subscribe(CategoriesAndStores => {
      this.categoriesUniverse.info = CategoriesAndStores[0];
      this.categoriesUniverse.gifts = CategoriesAndStores[1].stores;
      this.categoriesUniverse.restaurants = CategoriesAndStores[2].stores;
      this.categoriesUniverse.snacks = CategoriesAndStores[3].stores;
      this.categoriesUniverse.wonders = CategoriesAndStores[4].stores;

      this.categoriesUniverse.info.categories.map((category) => {
          this.storesImagesSrc[`${category.name}`].open = category.openIcon;
          this.storesImagesSrc[`${category.name}`].sleep = category.sleepIcon;
        });
      this.storesImagesSrcLoaded = Promise.resolve(true);
      this.showInfo();
  });
  }

  showInfo(): void {
    this.giftsCategoryOpen = this.categoriesUniverse.gifts.some(this.storeAvailability.isOpen);
    this.restaurantsCategoryOpen = this.categoriesUniverse.restaurants.some(this.storeAvailability.isOpen);
    this.snacksCategoryOpen = this.categoriesUniverse.snacks.some(this.storeAvailability.isOpen);
    this.wondersCategoryOpen = this.categoriesUniverse.wonders.some(this.storeAvailability.isOpen);
  }

}
