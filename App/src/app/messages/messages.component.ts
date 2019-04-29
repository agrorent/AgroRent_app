import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  lastMessage: string = "";
  constructor(private messageService: MessagesService) {

    messageService.subscribe(this);

  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.messageService.unSubscribe(this);
  }

  onSinginError(msg:string) {
    this.lastMessage = msg;
    console.log('arrived ti ' + msg);
  }

}
