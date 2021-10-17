import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { ResultsResolver } from './results/results.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    component: ResultsComponent,
    path: 'results/:key'/* ,
    resolve: {
      results: ResultsResolver
    } */
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
