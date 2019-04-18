import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica } from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit, OnDestroy {
  ingredients: Caracteristica[];
  private subscription: Subscription;

  constructor(private slService: ApartadoListService) {

  }
  ngOnInit() {
    this.ingredients = this.slService.getCaracteristicas();
    this.subscription = this.slService.ingredientsChanged
     .subscribe(
      (ingredients: Caracteristica[]) => {
        this.ingredients = ingredients;
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
