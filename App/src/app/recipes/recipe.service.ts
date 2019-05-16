import { Injectable } from '@angular/core';
import { Tractor } from './recipe.model';
import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { ApartadoListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Usuarios } from '../auth/signup/signup.model';
import {Usuario} from '../shared/ingredient.module';

@Injectable()


export class TractorService {
  TractoresChanged = new Subject<Tractor[]>();

  private Tractores: Tractor[] = [];
<<<<<<< HEAD
  private Usuarios: Usuario[] = [];
  private Apartados: Apartado[] = [];
=======
  private Usuarios: Usuarios[] = [];
>>>>>>> parent of 42accb14... merge master into benja2

  constructor(private slService: ApartadoListService) {}

  setTractores(Tractores: Tractor[]) {
    this.Tractores = Tractores;
    this.TractoresChanged.next(this.Tractores.slice());
  }
  setUsuarios(Usuarios: Usuario[]) {
    console.log("Persistiendo usuarios")
    this.Usuarios = Usuarios;
  }

  getTractores() {
    return this.Tractores.slice(); // We get a copy of the array whit slice
  }

  getUsuarios() {
    return this.Usuarios.slice(); // We get a copy of the array whit slice
    console.log(this.Usuarios);
  }

  getTractor(index: number) {
    return this.Tractores[index];
  }

  addTractoresToApartado(caracteristicas: Caracteristica[]) {
    this.slService.addCaracteristicas(caracteristicas);
  }

  addTractoresToApartadoPrueba(apartado: Apartado) {
<<<<<<< HEAD
    this.slService.addApartadosPrueba(apartado);
=======
    this.slService.addCaracteristicasPrueba(apartado);
>>>>>>> parent of 42accb14... merge master into benja2
  }

  addTractor(recipe: Tractor) {
    this.Tractores.push(recipe);
    this.TractoresChanged.next(this.Tractores.slice());
  }

  addUsuario(usuario: Usuarios[]) {
    // @ts-ignore
    this.Usuarios.push(usuario);
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
