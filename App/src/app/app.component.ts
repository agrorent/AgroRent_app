import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
=======
  styleUrls: ['./app.component.css']
>>>>>>> parent of 3e117637... App deletion
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({ 
    apiKey: "AIzaSyA6V5pLam4c8zAWpbjFS0KcbRwvaNjXXEY",
    authDomain: "login-a2cf2.firebaseapp.com"
  });

  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
