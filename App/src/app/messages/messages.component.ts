import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {


  static lastMessage: string = '12345';
  lastMessage:string = '';
  constructor(private messageService: MessagesService) {

    messageService.subscribe(this);

  }


  ngOnInit() {
    console.log('initialized');
    //MessagesComponent.lastMessage = 'joe';


  }


  ngOnDestroy() {
    this.messageService.unSubscribe(this);
    MessagesComponent.lastMessage = '2344';
    console.log('destroyed');
  }

  onSinginError(msg:string) {

    console.log('arrived ti ' + msg);
    console.log('---- ' + MessagesComponent.lastMessage);
    MessagesComponent.lastMessage = msg;
    alert('' + msg);
    this.lastMessage = MessagesComponent.lastMessage;

  }

}
