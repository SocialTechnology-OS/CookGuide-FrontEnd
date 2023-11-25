import { Component } from '@angular/core';
import { recipeCard } from 'src/app/shared/models/recipe/recipe.model';
import { RecipeService } from 'src/app/front/services/recipe/recipe.service';
import { UserServiceService } from 'src/app/front/services/user/user-service.service';
import { Account } from 'src/app/shared/models/account/account.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent{

  recipe!: recipeCard;
  Users: Account[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserServiceService) {}

  getListUsers() {
    this.userService.getUserList().subscribe((response:any) => {
      this.Users = response.data;
    })
  }

  ngOnInit(): void {
    this.getListUsers()
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeService.getRecipeById(recipeId).subscribe((response:any) => {
        this.recipe = response.data;
        console.log(this.recipe);
      });
    });
  }

    getUserNameById(userId: number) {

    }

}
