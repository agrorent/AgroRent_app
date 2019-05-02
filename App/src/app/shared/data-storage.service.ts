import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";

import { TractorService } from '../recipes/recipe.service';
import { Tractor } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: TractorService,
              private authService: AuthService) {}

  storeTractores() {
    const token = this.authService.getToken();
      return this.http.put('https://agrorent-7f6fd.firebaseio.com/tractores.json?auth=' + token,

                  this.recipeService.getTractores());
  }

  storeSignups() {
    console.log('guardox2');
    return this.http.put('https://agrorent-7f6fd.firebaseio.com/signup.json',
                  this.authService.getSignups());
  }

  getTractores() {
    const token = this.authService.getToken();
    this.http.get('https://agrorent-7f6fd.firebaseio.com/tractores.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const tractores: Tractor[] = response.json();
        for (let tractor of tractores) {
          if (!tractor['caracteristicas']) {
            console.log('tractor');
            tractor['caracteristicas'] = [];
          }
        }
        return tractores;
      }
    ))
    .subscribe(
      (recipes: Tractor[]) => {
        this.recipeService.setTractores(recipes);
        console.log('manda recipes');
      }
    );
  }

    getTractoresStart() {
        this.http.get('https://agrorent-7f6fd.firebaseio.com/tractores.json')
            .pipe(map(
                (response: Response) => {
                    const tractores: Tractor[] = response.json();
                    for (let tractor of tractores) {
                        if (!tractor['caracteristicas']) {
                            console.log('tractor');
                            tractor['caracteristicas'] = [];
                        }
                    }
                    return tractores;
                }
            ))
            .subscribe(
                (recipes: Tractor[]) => {
                    this.recipeService.setTractores(recipes);
                    console.log('manda recipes');
                }
            );
    }
}

