export class Usuarios {
  public fName: string;
  public lName: string;
  public localidad: string;
  public numeroTel: number;
  public mail: string;
  public type: string;

  constructor(nombre: string, apellido: string, localidad: string, numero: number, correo: string, tipo: string ) {
    this.fName = nombre;
    this.lName = apellido;
    this.localidad = localidad;
    this.numeroTel = numero;
    this.mail = correo;
    this.type = tipo;
  }
}
