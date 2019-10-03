import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {GridComponent} from './grid/grid.component';
import {ApiaryServiceComponent} from './apiary-service/apiary-service.component';
import {FlexComponent} from './flex/flex.component';
import {RatesComponent} from './rates/rates.component';
import {MercadolibreComponent} from './mercadolibre/mercadolibre.component';
import {ObseratesComponent} from './rates/obserates/obserates.component';
import {UserComponent} from './user/user.component';
import {NewsComponent} from './news/news.component';
import {AsyncComponent} from './async/async.component';

const routes: Routes = [
  {path: 'async', component: AsyncComponent},
  {path: 'news', component: NewsComponent},
  {path: 'user', component: UserComponent},
  {path: 'obserates', component: ObseratesComponent},
  {path: 'mercadolibre', component: MercadolibreComponent},
  {path: 'rates', component: RatesComponent},
  {path: 'apiary', component: ApiaryServiceComponent},
  {path: 'flex', component: FlexComponent},
  {path: 'grid', component: GridComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
