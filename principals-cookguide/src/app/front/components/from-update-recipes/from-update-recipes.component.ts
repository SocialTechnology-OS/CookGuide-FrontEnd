import { Component, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { recipeCard } from 'src/app/shared/models/recipe/recipe.model';
import { RecipeService } from 'src/app/front/services/recipe/recipe.service';

@Component({
  selector: 'app-from-update-recipes',
  templateUrl: './from-update-recipes.component.html',
  styleUrls: ['./from-update-recipes.component.css']
})
export class FromUpdateRecipesComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FromUpdateRecipesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: recipeCard,
    private recipeservice: RecipeService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group(
      {
        name: [data.name, Validators.required],
        image: [data.image, Validators.required],
        ingredients: [data.ingredients, Validators.required],
        preparation: [data.preparation, Validators.required],
        time: [data.time, Validators.required],
        servings: [data.servings, [Validators.required, Validators.min(1)]],
      }
    );
  }

  ngOnInit(): void {

  }

  updateRecipes(){
    const confirmModify = confirm('¿Está seguro de modificar esta receta?');
    if (!confirmModify) {
      return;
    }
    this.recipeservice.updateRecipe({
      uid: this.data.uid,
      name: this.form.value.name,
      authorId: this.data.authorId,
      image: this.form.value.image,
      ingredients: this.form.value.ingredients.split(','),
      preparation: this.form.value.preparation,
      time: this.form.value.time,
      servings: this.form.value.servings,
    })
      .subscribe({
        next: (response) => {
          this.dialogRef.close();
          this.openSnackBar('Receta registrada correctamente', 'Ok');
        },
        error: (error) => {
          this.openSnackBar('Error al registrar receta', 'Ok');
        },
    });
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, { duration: 5_000 });
  }
}
