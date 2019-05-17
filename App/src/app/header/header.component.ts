import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import {MessagesService} from '../messages/messages.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private messageService: MessagesService) {

  }
  onSaveData() {
    console.log('hola');
    this.dataStorageService.storeTractores()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    console.log('hola');
    this.dataStorageService.getTractores();
  }

  onLogout(){
    console.log('out');
    this.authService.logout((msg: string)=>{  this.messageService.errorSingin(msg); });
  }
}
