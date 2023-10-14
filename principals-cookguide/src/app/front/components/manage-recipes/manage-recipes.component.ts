import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service/recipe.service';
import { recipeCard } from 'src/app/models/card.model';
import { MatDialog } from '@angular/material/dialog';
import { FormCreateRecipesComponent } from '../form-create-recipes/form-create-recipes.component';
import { FromUpdateRecipesComponent } from '../from-update-recipes/from-update-recipes.component';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent {
  constructor(private recipesService: RecipeService, public dialog: MatDialog,) {
      this.recipesService.recipeChanged$.subscribe(() => {
        this.getRecipesByAuthor(this.authorId);
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
  openDialogUpdate(recipe: recipeCard): void {
    this.dialog.open(FromUpdateRecipesComponent, {
      data: recipe
    });
  }

  deleteRecipe(id: number) {
    const confirmDelete = confirm('¿Está seguro de eliminar esta receta?');
    if (!confirmDelete) {
      return;
    }
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
