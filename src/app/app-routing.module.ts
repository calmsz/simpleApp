import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftsComponent } from './components/stores/gifts/gifts.component';
import { RestaurantsComponent } from './components/stores/restaurants/restaurants.component';
import { SnacksComponent } from './components/stores/snacks/snacks.component';
import { WondersComponent } from './components/stores/wonders/wonders.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =  [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'gifts', component: GiftsComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'snacks', component: SnacksComponent },
    { path: 'wonders', component: WondersComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
