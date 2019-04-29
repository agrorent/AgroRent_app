import { Caracteristica, Apartado } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string;
  public apartados: Apartado[];

  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], statuses: string, apartados: Apartado[] ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
    this.status = statuses;
    this.apartados = apartados;
  }

}
