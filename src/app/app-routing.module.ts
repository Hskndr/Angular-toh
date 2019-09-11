import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {GridComponent} from './grid/grid.component';
import {ApiaryServiceComponent} from './apiary-service/apiary-service.component';
import {FlexComponent} from './flex/flex.component';

const routes: Routes = [
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
