import { Injectable } from '@angular/core';

import { Tractor } from './recipe.model';
import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { ApartadoListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()


export class TractorService {
  TractoresChanged = new Subject<Tractor[]>();

  private Tractores: Tractor[] = [];
  constructor(private slService: ApartadoListService) {}

  setTractores(Tractores: Tractor[]) {
    this.Tractores = Tractores;
    this.TractoresChanged.next(this.Tractores.slice());
  }

  getTractores() {
    return this.Tractores.slice(); // We get a copy of the array whit slice
  }

  getTractor(index: number) {
    return this.Tractores[index];
  }

  addTractoresToApartado(ingredients: Caracteristica[]) {
    this.slService.addCaracteristicas(ingredients);
  }

  addTractoresToApartadoPrueba(apartados: Apartado[]) {
    this.slService.addCaracteristicasPrueba(apartados);
  }

  addTractor(recipe: Tractor) {
    this.Tractores.push(recipe);
    this.TractoresChanged.next(this.Tractores.slice());
  }

  updateTractor(index: number, newRecipe: Tractor) {
    this.Tractores[index] = newRecipe;
    this.TractoresChanged.next(this.Tractores.slice());
  }

  deleteTractor(index: number) {
    this.Tractores.splice(index,1);
    this.TractoresChanged.next(this.Tractores.slice());
  }
}
