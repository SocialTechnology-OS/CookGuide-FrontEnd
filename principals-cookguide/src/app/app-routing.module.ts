import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';
import { ManageRecipesComponent } from './front/components/manage-recipes/manage-recipes.component';
import { RecipesDetailsComponent } from './front/components/recipes-details/recipes-details.component';
import { LoginComponent } from "./front/components/login/login.component";
import { RegisterComponent } from "./front/components/register/register.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'recipes', component: FrontCardsComponent},
  {path:'my-recipes', component: ManageRecipesComponent},
  {path:'recipes/:id', component: RecipesDetailsComponent},
  {path:'register', component: RegisterComponent},
  {path:'', pathMatch: 'full', redirectTo: '/login'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
