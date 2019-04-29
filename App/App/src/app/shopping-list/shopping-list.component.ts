import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica } from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit, OnDestroy {
  caracteristicas: Caracteristica[];
  private subscription: Subscription;

  constructor(private slService: ApartadoListService) {

  }
  ngOnInit() {
    this.caracteristicas = this.slService.getCaracteristicas();
    this.subscription = this.slService.caracteristicasChanged
     .subscribe(
      (caracteristicas: Caracteristica[]) => {
        this.caracteristicas = caracteristicas;
      }
      );
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
