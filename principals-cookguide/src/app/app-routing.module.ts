import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontCardsComponent } from './front/pages/front-cards/front-cards.component';
import { ManageRecipesComponent } from './front/pages/manage-recipes/manage-recipes.component';
import { RecipesDetailsComponent } from './front/pages/recipes-details/recipes-details.component';
import { LoginComponent } from "./front/pages/login/login.component";
import { RegisterComponent } from "./front/pages/register/register.component";
import { UserComponent } from "./front/pages/user/user.component";
import { AuthGuard } from './shared/models/guard/AuthGuard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'recipes', component: FrontCardsComponent, canActivate: [AuthGuard]},
  {path:'my-recipes', component: ManageRecipesComponent, canActivate: [AuthGuard]},
  {path:'recipes/:id', component: RecipesDetailsComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path:'user-page', component: UserComponent, canActivate: [AuthGuard]},
  {path:'', pathMatch: 'full', redirectTo: '/login'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
