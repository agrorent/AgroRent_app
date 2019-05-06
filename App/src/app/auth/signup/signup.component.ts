import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Usuarios} from 'src/app/auth/signup/signup.model';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: number;
  signup: Usuarios;

   private Usuario: Usuarios[] = [];

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService) { }

    ngOnInit() {
    }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const fNameUsuario = form.value.fName;
    const lNameUsuario = form.value.lName;
    const localidadUsuario = form.value.localidad;
    const telUsuario = form.value.numeroTel;
    const tipoUsuario = form.value.type;

    this.authService.signupUser(email, password);

    this.Usuario.push(fNameUsuario, lNameUsuario, localidadUsuario, telUsuario, email, tipoUsuario);

    console.log(this.Usuario);

    this.dataStorageService.storeUsuarios().subscribe(
        (response: Response) => {
          console.log(response);
        }
    );

  }
}
