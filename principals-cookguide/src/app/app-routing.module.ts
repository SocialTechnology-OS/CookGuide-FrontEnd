import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';
import { ManageRecipesComponent } from './front/components/manage-recipes/manage-recipes.component';

const routes: Routes = [
  {path:'recipes', component: FrontCardsComponent},
  {path:'my-recipes', component: ManageRecipesComponent},
  {path:'', pathMatch: 'full', redirectTo: '/recipes'},
  {path: '**', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
