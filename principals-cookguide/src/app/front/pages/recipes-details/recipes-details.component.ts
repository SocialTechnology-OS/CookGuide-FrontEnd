import { Component } from '@angular/core';
import { recipeCard } from 'src/app/shared/models/recipe/recipe.model';
import { RecipeService } from 'src/app/front/services/recipe/recipe.service';
import { UserServiceService } from 'src/app/front/services/user/user-service.service';
import { Account } from 'src/app/shared/models/account/account.model';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent{

  recipe!: recipeCard;
  Users: Account[] = [];
  authorDetails: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserServiceService, private router: Router, public dialog: MatDialog) {}

  getListUsers() {
    this.userService.getUserList().subscribe((response:any) => {
      this.Users = response.data;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeService.getRecipeById(recipeId).subscribe((response: any) => {
        this.recipe = response.data;
        this.userService.getAuthorByRecipeId(recipeId).subscribe((authorResponse: any) => {
          this.authorDetails = authorResponse[0];
        });
        // Asumiendo que this.recipe.ingredients es un array de strings
        if (this.recipe.ingredients && Array.isArray(this.recipe.ingredients)) {
          this.recipe.ingredients = this.recipe.ingredients.map(ingredient =>
            ingredient.replace(/, 0\.0,/, ',')
          );
        }


        console.log(this.recipe);
      });
    });
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }

  placeOrder() {
    alert('¡Tu pedido ya fue realizado!');
  }




}
