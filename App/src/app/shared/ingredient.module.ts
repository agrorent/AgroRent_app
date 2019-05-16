export class Caracteristica {
  constructor(public name: string, public amount: number) {
  }
}

export class Apartado {
<<<<<<< HEAD
  constructor(public name: string, public description: string, public imagePath: string, public status: string, public precio: number) {
=======
  constructor(public name: string, public status: string) {
>>>>>>> parent of 42accb14... merge master into benja2
  }

  
}

export class Usuario {
  constructor(public nombre: string, public apellido:string, public tel: string, public localidad:string,public tipo:string, public email: string) {
  }
}