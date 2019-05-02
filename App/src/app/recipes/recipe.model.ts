import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];

  constructor(names: string, desc: string, imaPath: string, ingredients: Caracteristica[] ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = ingredients;
  }

}
