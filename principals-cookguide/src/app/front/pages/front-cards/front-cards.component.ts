import { Component } from '@angular/core';
import { RecipeService } from 'src/app/front/services/recipe/recipe.service';
import { recipeCard } from 'src/app/shared/models/recipe/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-cards',
  templateUrl: './front-cards.component.html',
  styleUrls: ['./front-cards.component.css']
})
export class FrontCardsComponent {

  constructor(private recipesService: RecipeService, private router: Router) {}

  recipesCards: recipeCard[] = [];

  getlistrecipes() {
    this.recipesService.getRecipesList().subscribe(response => {
      console.log(response);
      this.recipesCards = response;
    })
  }

  ngOnInit(): void {
    this.getlistrecipes();
  }

  ViewDetails(recipe: recipeCard) {
    this.router.navigate(['/recipes', recipe.id]);
  }
}
