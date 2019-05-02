import {MessagesComponent} from './messages.component';
import { Injectable } from '@angular/core';
@Injectable()

export class MessagesService {


    actualMessageComponent: MessagesComponent = null;

    constructor() {

    }
    errorSingin(msg: string) {
        console.log('Mensaje   ' + msg);
        this.actualMessageComponent.onSinginError(msg);

    }

    subscribe(ms: MessagesComponent) {

        if ( this.actualMessageComponent == null) {
        this.actualMessageComponent = ms;
        }
    }

    unSubscribe(ms: MessagesComponent) {
        if ( this.actualMessageComponent != ms ) {

            this.actualMessageComponent = null;
        }
    }

}
