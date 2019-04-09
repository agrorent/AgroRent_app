import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{
    token: string;

    constructor(private router: Router) {}
    signupUser(email: string, password: string){
        console.log("base");
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        )
    }

    signinUser(email: string, password: string) {
        console.log("in");
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                )

            }

        )
        .catch(
            error => console.log(error)
        );
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }

    getToken(){
        console.log("token");
         firebase.auth().currentUser.getIdToken()
         .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated() {
        console.log("auth");
        return this.token != null;
    }
}