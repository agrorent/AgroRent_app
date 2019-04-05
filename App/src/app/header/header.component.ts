import { Component } from '@angular/core';
<<<<<<< HEAD
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

=======
>>>>>>> parent of 3e117637... App deletion

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
<<<<<<< HEAD
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {

  }
  onSaveData() {
    console.log('hola');
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    console.log('hola');
    this.dataStorageService.getRecipes();
  }
=======
})
export class HeaderComponent {
>>>>>>> parent of 3e117637... App deletion
}
