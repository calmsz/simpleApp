import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftsComponent } from './gifts/gifts.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SnacksComponent } from './snacks/snacks.component';
import { WondersComponent } from './wonders/wonders.component';
import { HomeComponent } from './home/home.component';

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
