import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()


export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
        new Recipe(
            'John Deere RX Series',
            'Tractor',
            // tslint:disable-next-line:max-line-length
            'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
        [
          new Ingredient('Kilometraje', 13980),
          new Ingredient('Precio por Hectárea (MXN)', 20000)
        ]),
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
            // tslint:disable-next-line:max-line-length
          'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
            [
              new Ingredient('Kilometraje', 13980),
              new Ingredient('Precio por Hectárea (MXN)', 20000)
        ])
      ];
  constructor(private slService: ShoppingListService) {}

  setTractores(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getTractores() {
    return this.recipes.slice(); // We get a copy of the array whit slice
  }

  getTractor(index: number){
    return this.recipes[index];
  }

  addTractoresToApartado(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addTractor(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateTractor(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteTractor(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
