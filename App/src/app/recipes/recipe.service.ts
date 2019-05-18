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
  private Usuarios: Usuario[] = [];
  private Apartados: Apartado[] = [];

  constructor(private slService: ApartadoListService) {}

  setTractores(Tractores: Tractor[]) {
    this.Tractores = Tractores;
    this.TractoresChanged.next(this.Tractores.slice());
  }
  setUsuarios(Usuarios: Usuario[]) {
    console.log("Persistiendo usuarios")
    this.Usuarios = Usuarios;
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

  getTractor(index: number) {
    return this.Tractores[index];
  }

  addApartados(apartados: Apartado) {
    this.Apartados.push(apartados);
    console.log('Manda add?')
  }

  addTractoresToApartado(caracteristicas: Caracteristica[]) {
    this.slService.addCaracteristicas(caracteristicas);
  }

  addTractoresToApartadoPrueba(apartado: Apartado, callback: Function) {
    this.slService.addApartadosPrueba(apartado);
    console.log(apartado);
    callback ('Tractor apartado');
  }

  addTractor(recipe: Tractor, callback: Function) {
    this.Tractores.push(recipe);
    this.TractoresChanged.next(this.Tractores.slice());
    callback ('Tractor añadido');
  }

  addUsuario(usuario: Usuarios[]) {
    // @ts-ignore
    this.Usuarios.push(usuario);
  }

  updateTractor(index: number, newRecipe: Tractor, callback: Function) {
    this.Tractores[index] = newRecipe;
    this.TractoresChanged.next(this.Tractores.slice());
    callback ('Tractor actualizado');
  }

  onAutorizar( callback: Function){
    callback ('Tractor autorizado');
  }

  deleteTractor(index: number, callback: Function) {
    this.Tractores.splice(index,1);
    this.TractoresChanged.next(this.Tractores.slice());
    callback ('Tractor eliminado');
  }
}
