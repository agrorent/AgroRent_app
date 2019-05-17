import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  loadedFeature = 'tractor';

  ngOnInit() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCuFcypXWG-M0j3G7jTuqhRPvP5fMaRlKA',
    authDomain: 'agrorent-7f6fd.firebaseapp.com'
  });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
