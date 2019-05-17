import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Usuarios} from 'src/app/auth/signup/signup.model';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';
import {TractorService} from '../../recipes/recipe.service';
import {MessagesService} from '../../messages/messages.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: number;
  signup: Usuarios;
  saldo = 0;

   private Usuario: Usuarios[] = [];

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService,
              private tractorService: TractorService,
              private messageService: MessagesService) { }

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
    const saldo = this.saldo;

    this.authService.signupUser(email, password, (msg: string)=>{  this.messageService.errorSingin(msg); });
    // @ts-ignore
    this.Usuario.push(fNameUsuario, lNameUsuario, localidadUsuario, telUsuario, email, tipoUsuario, saldo);
    this.tractorService.addUsuario(this.Usuario);
    console.log(this.Usuario);

    this.dataStorageService.storeUsuarios().subscribe(
        (response: Response) => {
          console.log(response);
        }
    );

  }
}
