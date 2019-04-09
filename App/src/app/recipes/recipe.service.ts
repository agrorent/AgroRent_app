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
        new Recipe(
            'John Deere RX Series',
            'Tractor',
            'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
        [
          new Ingredient('Kilometraje', 13980),
          new Ingredient('Precio por Hectárea (MXN)', 20000)
        ]),
    // tslint:disable-next-line: max-line-length
        new Recipe(
            'John Deere RT Series',
            'Tractor',
            'https://www.extremetech.com/wp-content/uploads/2017/03/john-deere-2015jpg-963565ff3304c742-640x427.jpg',
        [
          new Ingredient('Kilometraje', 11980),
          new Ingredient('Precio por Hectárea (MXN)', 20100)
        ]),
        new Recipe(
          'John Deere RX Series',
          'Tractor',
          'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
            [
              new Ingredient('Kilometraje', 13980),
              new Ingredient('Precio por Hectárea (MXN)', 20000)
        ]),
        new Recipe(
          'John Deere RX Series',
          'Tractor',
          'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
            [
              new Ingredient('Kilometraje', 1390),
              new Ingredient('Precio por Hectárea (MXN)', 30000)
        ]),
      new Recipe(
          'John Deere RT Series',
          'Tractor',
          'https://www.extremetech.com/wp-content/uploads/2017/03/john-deere-2015jpg-963565ff3304c742-640x427.jpg',
          [
            new Ingredient('Kilometraje', 10980),
            new Ingredient('Precio por Hectárea (MXN)', 24200)
        ]),
      new Recipe(
          'John Deere RX Series',
          'Tractor',
          'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
          [
            new Ingredient('Kilometraje', 1102),
            new Ingredient('Precio por Hectárea (MXN)', 20120)
        ]),
      new Recipe(
          'John Deere RT Series',
          'Tractor',
          'https://www.extremetech.com/wp-content/uploads/2017/03/john-deere-2015jpg-963565ff3304c742-640x427.jpg',
          [
              new Ingredient('Kilometraje', 13980),
              new Ingredient('Precio por Hectárea (MXN)', 20000)
        ])
      ];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

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
