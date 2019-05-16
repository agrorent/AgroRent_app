import {Component, OnInit, DoCheck, AfterContentInit} from '@angular/core';
import * as firebase from 'firebase';
import {DataStorageService} from "../shared/data-storage.service";
import {TractorService} from "../recipes/recipe.service";
import {Usuario} from '../shared/ingredient.module';
import {Usuarios} from 'src/app/auth/signup/signup.model';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    usuario: Usuario;
// tslint:disable-next-line: ban-types
    email: String;
    

    constructor(private dataStorageService: DataStorageService) {
    }

    ngOnInit() {
        this.dataStorageService.getCurrentProfile().subscribe(
            users => {
                console.log("Usuarios obtenidos: ");
                console.log(users);

                this.email =  firebase.auth().currentUser.email;
                console.log("Usuario buscado: " + this.email);

                users.map(user => {
                    console.log("Usuario encontrado: " + user.email)
                    if (user.email == this.email) {
                        this.usuario = user;
                        console.log("Usuario"+user);
                       /* this.nombre= user.nombre;
                        this.apellido=user.apellido;
                        this.telefono=user.telefono;
                        this.tipo?*/
                    }
                })
            }
        );
    }
}