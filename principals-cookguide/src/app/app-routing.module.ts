import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';

const routes: Routes = [
  {path:'recipes', component: FrontCardsComponent},
  {path:'', pathMatch: 'full', redirectTo: '/recipes'},
  {path: '**', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
