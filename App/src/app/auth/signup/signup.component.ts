import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Signup} from 'src/app/auth/signup/signup.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {TractorService} from '../../recipes/recipe.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: number;
  signup: Signup;
  signupForm: FormGroup;

   private Usuario: Signup[] = [];

  constructor(private authService: AuthService,
              private tractorService: TractorService) { }

    ngOnInit() {
    }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let fNameUsuario = form.value.fName;
    let lNameUsuario = form.value.lName;
    let localidadUsuario = form.value.localidad;
    let telUsuario = form.value.numeroTel;
    let tipoUsuario = form.value.type;

    this.authService.signupUser(email, password);

    this.Usuario.push(fNameUsuario, lNameUsuario, localidadUsuario, telUsuario, email, tipoUsuario);

    console.log(this.Usuario);

  }
}
