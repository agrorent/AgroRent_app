import { Caracteristica, Apartado } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string;
  public apartados: Apartado[];

<<<<<<< HEAD
  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], statuses: string, apartados: Apartado[] ) {
=======
  constructor(names: string, desc: string, imaPath: string, ingredients: Caracteristica[], statuses: string ) {
>>>>>>> parent of d3ffff81... Works apartado
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = ingredients;
    this.status = statuses;
    this.apartados = apartados;
  }

}
