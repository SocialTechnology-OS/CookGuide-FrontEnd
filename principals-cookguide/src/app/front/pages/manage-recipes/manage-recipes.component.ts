import { Component } from '@angular/core';
import { RecipeService } from 'src/app/front/services/recipe/recipe.service';
import { UserServiceService } from 'src/app/front/services/user/user-service.service';
import { recipeCard } from 'src/app/shared/models/recipe/recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { FormCreateRecipesComponent } from '../../components/form-create-recipes/form-create-recipes.component';
import { FromUpdateRecipesComponent } from '../../components/from-update-recipes/from-update-recipes.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent {
  constructor(private recipesService: RecipeService, private userService: UserServiceService, public dialog: MatDialog, private router: Router) {
      this.recipesService.recipeChanged$.subscribe(() => {
        this.getRecipesByAuthor(this.authorId);
      });
  }

  recipesCards: recipeCard[] = [];
  authorId: number | null = null;

  getRecipesByAuthor(authorNumber:any) {
    this.recipesService.getRecipesListByAuthor(authorNumber).subscribe((response: any) => {
      console.log(response.data);
      this.recipesCards = response.data;
    })
  }

  ngOnInit(): void {
    this.authorId = this.userService.getUserId();
    if (!this.authorId) {
      this.router.navigate(['/login']);
    } else {
      this.getRecipesByAuthor(this.authorId);
    }
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
