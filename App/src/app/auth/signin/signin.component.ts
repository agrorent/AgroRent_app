import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import {MessagesService} from '../../messages/messages.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService,
              private messageService: MessagesService
              ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password , (msg: string)=>{  this.messageService.errorSingin(msg); } );

  }

  onFetch() {
    this.dataStorageService.getTractoresStart();
    this.dataStorageService.getApartados();
  }

}
