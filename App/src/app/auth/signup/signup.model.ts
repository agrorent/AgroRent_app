
export class Signup {
  public name: string;
  public lastname: string;
  public localidad: string;
  public number: number;
  public mail: string;
  public password: string; 
  public type: string;
 

  constructor(nombre: string, apellido: string, local: string, numero: number, correo: string, contraseña: string, tipo: string ) {
    this.name = nombre;
    this.lastname = apellido;
    this.localidad = local;
    this.number = numero;
    this.mail = correo;
    this.password = contraseña;
    this.type = tipo;
   
  }

}
