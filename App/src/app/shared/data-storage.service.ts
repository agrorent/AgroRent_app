import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";

import { TractorService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: TractorService,
              private authService: AuthService) {}

  storeTractores() {
    const token = this.authService.getToken();
    return this.http.put('https://login-a2cf2.firebaseio.com/recipes.json?auth='+token,
                  this.recipeService.getTractores());
  }

  getTractores() {
    const token = this.authService.getToken();
    this.http.get('https://login-a2cf2.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log('recipe');
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setTractores(recipes);
        console.log('manda recipes');
      }
    );
  }
}
