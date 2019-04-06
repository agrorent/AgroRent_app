import { Caracteristica } from '../shared/caracteristica.module';
import { Subject } from 'rxjs';

export class ApartadoService {
  caracteristicasChanged = new Subject<Caracteristica[]>();
  startedEditing = new Subject<number>();
  private caracteristicas: Caracteristica[] = [
    new Caracteristica('Apple', 5),
    new Caracteristica('Tomatos', 10)
  ];

  getCaracteristicas() {
    return this.caracteristicas.slice();
  }

  addCaracteristica(caracteristica: Caracteristica) {
    this.caracteristicas.push(caracteristica);
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

  addCaracteristicas(caracteristicas: Caracteristica[]) {
    this.caracteristicas.push(...caracteristicas);
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

  getCaracteristica(index: number) {
    return this.caracteristicas[index];
  }

  updateCaracteristica(index: number, newCaracteristica: Caracteristica) {
    this.caracteristicas[index] = newCaracteristica;
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

  deleteCaracteristica(index: number) {
    this.caracteristicas.splice(index, 1);
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

}