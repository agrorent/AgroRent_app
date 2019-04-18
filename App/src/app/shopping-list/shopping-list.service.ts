import { Caracteristica } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class ApartadoListService {
  ingredientsChanged = new Subject<Caracteristica[]>();
  startedEditing = new Subject<number>();
  private ingredients: Caracteristica[] = [
    new Caracteristica('Kilometraje', 55780),
    new Caracteristica('Precio por Hectárea (MXN)', 1400)
  ];

  getCaracteristicas() {
    return this.ingredients.slice();
  }

  addCaracteristica(ingredient: Caracteristica) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addCaracteristicas(ingredients: Caracteristica[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getCaracteristica(index: number) {
    return this.ingredients[index];
  }

  updateCaracteristica(index: number, newIngredient: Caracteristica) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteCaracteristica(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
