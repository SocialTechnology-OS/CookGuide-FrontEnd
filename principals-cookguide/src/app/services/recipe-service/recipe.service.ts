import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { recipeCard } from '../../models/card.model';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}


   private recipeChangedSubject = new Subject<void>();

   private onRecipeChanged() {
     this.recipeChangedSubject.next();
   }
   recipeChanged$ = this.recipeChangedSubject.asObservable();
 

  getRecipesList() {
    return this.http
      .get<recipeCard[]>(`${environment.baseURL}/recipes`)
  }
  
  
  getRecipeById(id: number) {
    return this.http
      .get<recipeCard>(`${environment.baseURL}/recipes/${id}`)
  }

  createRecipe(recipe: recipeCard) {
    return this.http
      .post(`${environment.baseURL}/recipes`, recipe).pipe(tap(() => {
        this.onRecipeChanged(); 
      }))
  }

  updateRecipe(recipe: recipeCard) {
    return this.http
      .put(`${environment.baseURL}/recipes/${recipe.id}`, recipe).pipe(tap(() => {
        this.onRecipeChanged(); 
      }))
  }

  deleteRecipe(id: number) {
    return this.http
      .delete(`${environment.baseURL}/recipes/${id}`)
  }
      
}
