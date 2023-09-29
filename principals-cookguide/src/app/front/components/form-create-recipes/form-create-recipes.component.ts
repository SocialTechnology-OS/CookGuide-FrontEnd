import { Component, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-form-create-recipes',
  templateUrl: './form-create-recipes.component.html',
  styleUrls: ['./form-create-recipes.component.css']
})
export class FormCreateRecipesComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormCreateRecipesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private recipeservice: RecipeService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        ingredients: ['', Validators.required],
        preparation: ['', Validators.required],
        time: ['', Validators.required],
        servings: ['', [Validators.required, Validators.min(1)]],
      }
    );
  }

  createRecipe() {
    console.log(this.form.value.ingredients);
    this.recipeservice
      .createRecipe({
        id: 0,
        name: this.form.value.name,
        author: '5',
        image: "asdyuigbsf",
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
