import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];

  public status: string;

<<<<<<< HEAD

  constructor(names: string, desc: string, imaPath: string, ingredients: Caracteristica[], statuses: string ) {
=======
  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], statuses: string ) {
>>>>>>> parent of 860492ba... Revert "Works apartado"
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
    this.status = statuses;
  }

}
