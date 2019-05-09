import { Injectable } from '@angular/core';
import { Tractor } from './recipe.model';
import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { ApartadoListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Usuarios } from '../auth/signup/signup.model';

@Injectable()


export class TractorService {
  TractoresChanged = new Subject<Tractor[]>();

  private Tractores: Tractor[] = [];
  private Usuarios: Usuarios[] = [];
  private Apartados: Apartado[] = [];

  constructor(private slService: ApartadoListService) {}

  setTractores(Tractores: Tractor[]) {
    this.Tractores = Tractores;
    this.TractoresChanged.next(this.Tractores.slice());
  }

  setApartados(Apartados: Apartado[]) {
    this.Apartados = Apartados;
  }

  getTractores() {
    return this.Tractores.slice(); // We get a copy of the array whit slice
  }

  getUsuarios() {
    return this.Usuarios.slice(); // We get a copy of the array whit slice
    console.log(this.Usuarios);
  }

  getApartados() {
    return this.Apartados.slice(); // We get a copy of the array whit slice
    console.log(this.Apartados);
  }

  getTractor(index: number) {
    return this.Tractores[index];
  }

  addTractoresToApartado(caracteristicas: Caracteristica[]) {
    this.slService.addCaracteristicas(caracteristicas);
  }

  addTractoresToApartadoPrueba(apartado: Apartado) {
    this.slService.addApartadosPrueba(apartado);
  }

  addTractor(recipe: Tractor) {
    this.Tractores.push(recipe);
    this.TractoresChanged.next(this.Tractores.slice());
  }

  addUsuario(usuario: Usuarios[]) {
    // @ts-ignore
    this.Usuarios.push(usuario);
  }

  addApartados(apartados: Apartado) {
    // @ts-ignore
    this.Apartados.push(apartados);
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
