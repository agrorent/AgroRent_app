import { Caracteristica } from '../shared/ingredient.module';

export class Tractor {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];
  public status: string;
  public precio: number;
  public tipo: string;
  public power: string;
  public marca: string;
  public granos: string;
  public numDiscos: number;
  public mecanismo: string;

  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[], statuses: string, precio: number, tipo: string, power: string, marca: string, granos: string, numDiscos: number, mecanismo: string){
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
    this.status = statuses;
    this.precio = precio;
    this.tipo = tipo;
    this.power = power;
    this.marca = marca;
    this.granos = granos;
    this.numDiscos = numDiscos;
    this.mecanismo = mecanismo;
  }

}
