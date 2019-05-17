import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string;
  public precio: number;
  public tipo: string;

  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], statuses: string, precio: number, tipo: string ) {
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
    this.status = statuses;
    this.precio = precio;
    this.tipo = tipo;
  }

}
