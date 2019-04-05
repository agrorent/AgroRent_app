import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
=======
  styleUrls: ['./app.component.css']
>>>>>>> parent of 3e117637... App deletion
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
