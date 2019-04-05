import { Ingredient } from '../shared/ingredient.module';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(names: string, desc: string, imaPath: string, ingredients: Ingredient[] ){
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.ingredients = ingredients;
  }

}
