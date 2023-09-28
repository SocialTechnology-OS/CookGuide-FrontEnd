import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { recipeCard } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getRecipesList() {
    return this.http
      .get<recipeCard[]>(`${environment.baseURL}/recipes`)
  }
      
}
