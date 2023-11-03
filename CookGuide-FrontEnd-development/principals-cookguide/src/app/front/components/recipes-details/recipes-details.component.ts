import { Component } from '@angular/core';
import { recipeCard } from 'src/app/models/card.model';
import { RecipeService } from 'src/app/services/recipe-service/recipe.service';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent{

  recipe!: recipeCard;
  Users: User[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserServiceService) {}

  getListUsers() {
    this.userService.getUserList().subscribe(response => {
      this.Users = response;
    })
  }

  ngOnInit(): void {
    this.getListUsers() 
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.recipeService.getRecipeById(recipeId).subscribe(response => {
        this.recipe = response;
      });
    });
  }

  getAuthorFullName(authorId: any): string {
    const author = this.Users.find(user => user.id.toString() === authorId.toString());
    if (author) {
      return `${author.name} ${author.lastname}`;
    }
    return 'Autor Desconocido'; 
  }

}
