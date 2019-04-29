import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string;

  constructor(names: string, desc: string, imaPath: string, ingredients: Caracteristica[], statuses: string ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = ingredients;
    this.status = statuses;
  }

}
