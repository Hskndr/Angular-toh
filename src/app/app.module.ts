import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GridComponent} from './grid/grid.component';
import {ApiaryServiceComponent} from './apiary-service/apiary-service.component';
import {FlexComponent} from './flex/flex.component';
import {HskndrCodeComponent} from './hskndr-code/hskndr-code.component';
import {HttpClientModule} from '@angular/common/http';
import { RatesComponent } from './rates/rates.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ObseratesComponent } from './rates/obserates/obserates.component';
import { MercadolibreComponent } from './mercadolibre/mercadolibre.component';
import {UserService} from './services/user.service';
import {CrudService} from './services/crud.service';
import { UserComponent } from './user/user.component';
import {ApinewService} from './services/apinew.service';
import { NewsComponent } from './news/news.component';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GridComponent,
    ApiaryServiceComponent,
    FlexComponent,
    HskndrCodeComponent,
    RatesComponent,
    HeroSearchComponent,
    ObseratesComponent,
    MercadolibreComponent,
    UserComponent,
    NewsComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )*/
  ],
  providers: [
    UserService,
    CrudService,
    ApinewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
