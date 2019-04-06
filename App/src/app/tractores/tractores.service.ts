import { Injectable } from '@angular/core';

import { Tractores } from './tractores.model';
import { Caracteristica } from '../shared/caracteristica.module';
import { ApartadoService } from '../apartado/apartado.service';
import { Subject } from 'rxjs';

@Injectable()

export class TractoresService {
  tractoressChanged = new Subject<Tractores[]>();

  private tractoress: Tractores[] = [
    // tslint:disable-next-line: max-line-length
        new Tractores('A test Tractores ', 'This is simple a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg',
        [
          new Caracteristica('Meat', 1),
          new Caracteristica('French Fries', 20)
        ]),
    // tslint:disable-next-line: max-line-length
        new Tractores('Another test Tractores ', 'This is simple a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg',
        [
          new Caracteristica('Meat', 1),
          new Caracteristica('Bread', 2)
        ])
      ];
  constructor(private slService: ApartadoService) {}

  getTractoress() {
    return this.tractoress.slice(); // We get a copy of the array whit slice
  }

  getTractores(index: number){
    return this.tractoress[index];
  }

  addCaracteristicasToApartado(caracteristicas: Caracteristica[]) {
    this.slService.addCaracteristicas(caracteristicas);
  }

  addTractores(tractores: Tractores) {
    this.tractoress.push(tractores);
    this.tractoressChanged.next(this.tractoress.slice());
  }

  updateTractores(index: number, newTractores: Tractores) {
    this.tractoress[index] = newTractores;
    this.tractoressChanged.next(this.tractoress.slice());
  }

  deleteTractores(index: number) {
    this.tractoress.splice(index,1);
    this.tractoressChanged.next(this.tractoress.slice());
  }
}
