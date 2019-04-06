import { Caracteristica } from '../shared/caracteristica.module';

export class Tractores {
  public name: string;
  public description: string;
  public imagePath: string;
  public caracteristicas: Caracteristica[];

  constructor(names: string, desc: string, imaPath: string, caracteristicas: Caracteristica[] ){
    this.name = names;
    this.description = desc;
    this.imagePath = imaPath;
    this.caracteristicas = caracteristicas;
  }

}
