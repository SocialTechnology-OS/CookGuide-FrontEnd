import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';

const routes: Routes = [
  {path:'home', component: FrontCardsComponent},
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
