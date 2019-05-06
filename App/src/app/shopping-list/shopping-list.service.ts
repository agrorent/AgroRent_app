import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class ApartadoListService {
  caracteristicasChanged = new Subject<Caracteristica[]>();
  startedEditing = new Subject<number>();
  private caracteristicas: Caracteristica[] = [
    new Caracteristica('Kilometraje', 55780),
    new Caracteristica('Precio por Hectárea (MXN)', 1400)
  ];
  private apartados: Apartado[] = [];

  //private NameTractor: ;

  getCaracteristicas() {
    return this.caracteristicas.slice();
  }
  getApartados() {

    return this.apartados.slice();
  }
  addCaracteristica(caracteristica: Caracteristica) {
    this.caracteristicas.push(caracteristica);
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

  addCaracteristicas(caracteristicas: Caracteristica[]) {
    this.caracteristicas.push(...caracteristicas);
    this.caracteristicasChanged.next(this.caracteristicas.slice());
  }

  addCaracteristicasPrueba(t: Apartado) {
    this.apartados.push(t);
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
