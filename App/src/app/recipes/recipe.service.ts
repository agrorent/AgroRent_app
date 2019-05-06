import { Injectable } from '@angular/core';

import { Tractor } from './recipe.model';
import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { ApartadoListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Signup } from '../auth/signup/signup.model';

@Injectable()


export class TractorService {
  TractoresChanged = new Subject<Tractor[]>();

  private Tractores: Tractor[] = [];
  private Usuarios: Signup[] = [];

  constructor(private slService: ApartadoListService) {}

  setTractores(Tractores: Tractor[]) {
    this.Tractores = Tractores;
    this.TractoresChanged.next(this.Tractores.slice());
  }

  getTractores() {
    return this.Tractores.slice(); // We get a copy of the array whit slice
  }

  getUsuarios(index: number) {
    return this.Usuarios[index]; // We get a copy of the array whit slice
  }

  getTractor(index: number) {
    return this.Tractores[index];
  }

  addTractoresToApartado(caracteristicas: Caracteristica[]) {
    this.slService.addCaracteristicas(caracteristicas);
  }

  addTractoresToApartadoPrueba(apartado: Apartado) {
    this.slService.addCaracteristicasPrueba(apartado);
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
