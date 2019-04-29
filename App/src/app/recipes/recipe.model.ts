import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string

<<<<<<< HEAD
  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], status: string ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
    this.status = status;
=======
  constructor(names: string, desc: string, imaPath: string, ingredients: Caracteristica[], statuses: string ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = ingredients;
    this.status = statuses;
>>>>>>> parent of d3ffff81... Works apartado
  }

}
