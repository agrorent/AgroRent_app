import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()


export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
        new Recipe('A test Recipe ', 'This is simple a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
    // tslint:disable-next-line: max-line-length
        new Recipe('Another test Recipe ', 'This is simple a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('Bread', 2)
        ])
      ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // We get a copy of the array whit slice
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
