import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { recipeCard } from 'src/app/models/card.model';
import { MatDialog } from '@angular/material/dialog';
import { FormCreateRecipesComponent } from '../form-create-recipes/form-create-recipes.component';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent {
  constructor(private recipesService: RecipeService, public dialog: MatDialog,) {
      //se inicializa una suscripción para el observable peliculaCreated$ (para detectar la creación de películas)
      this.recipesService.recipeChanged$.subscribe(() => {
        this.getRecipesByAuthor(this.authorId); //actualiza la lista de películas cuando se crea una nueva película
      });
  }

  recipesCards: recipeCard[] = [];
  authorId: string = '5';

  getRecipesByAuthor(authorNumber: string) {
    this.recipesService.getRecipesList().subscribe(
      (recipes: recipeCard[]) => {
        this.recipesCards = recipes.filter(recipe => recipe.author === authorNumber);
      }
    );
  }

  ngOnInit(): void {
    this.getRecipesByAuthor(this.authorId);
  }

  createRecipe(recipe: recipeCard) {
    this.recipesService.createRecipe(recipe).subscribe(response => {
      console.log(response);
      this.getRecipesByAuthor(this.authorId);
    })
  }

  openDialog(): void {
    this.dialog.open(FormCreateRecipesComponent);
  }

  deleteRecipe(id: number) {
    this.recipesService.deleteRecipe(id).subscribe(response => {
      console.log(response);
      this.getRecipesByAuthor(this.authorId);
    })
  }

  updateRecipe(recipe: recipeCard) {
    this.recipesService.updateRecipe(recipe).subscribe(response => {
      console.log(response);
      this.getRecipesByAuthor(this.authorId);
    })
  }




}
