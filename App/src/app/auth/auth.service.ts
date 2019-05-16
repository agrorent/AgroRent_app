import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router) {}
    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    // tslint:disable-next-line:ban-types
    signinUser(email: string, password: string , callback: Function) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/tractores']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => {
                        this.token = token;
                    }
                );

            }

        )
        .catch(
            error => {
                console.log(error);
                callback('Wrong user/password');
            }
        );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
    }

    getToken(){
         firebase.auth().currentUser.getIdToken()
         .then(
            (token: string) => this.token = token
        );
         return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
