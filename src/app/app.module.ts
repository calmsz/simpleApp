import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GiftsComponent } from './components/stores/gifts/gifts.component';
import { RestaurantsComponent } from './components/stores/restaurants/restaurants.component';
import { SnacksComponent } from './components/stores/snacks/snacks.component';
import { WondersComponent } from './components/stores/wonders/wonders.component';
import { HomeComponent } from './components/home/home.component';
import { ServerModule } from '@angular/platform-server';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GiftsComponent,
    RestaurantsComponent,
    SnacksComponent,
    WondersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
