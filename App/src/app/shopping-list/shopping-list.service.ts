import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Kilometraje', 55780),
    new Ingredient('Precio por Hectárea (MXN)', 1400)
  ];

  getCaracteristicas() {
    return this.ingredients.slice();
  }

  addCaracteristica(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addCaracteristicas(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getCaracteristica(index: number) {
    return this.ingredients[index];
  }

  updateCaracteristica(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteCaracteristica(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
