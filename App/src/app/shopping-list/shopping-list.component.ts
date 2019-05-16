import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica, Apartado} from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit, OnDestroy {
  caracteristicas: Caracteristica[];
  apartados: Apartado[];

  constructor(private slService: ApartadoListService) {

  }
  ngOnInit() {
<<<<<<< HEAD
    this.apartados = this.tractorService.getApartados();
=======
    this.caracteristicas = this.slService.getCaracteristicas();
    this.subscription = this.slService.caracteristicasChanged
     .subscribe(
      (caracteristicas: Caracteristica[]) => {
        this.caracteristicas = caracteristicas;
      }
      );

    this.apartados = this.slService.getApartados();
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
>>>>>>> parent of 42accb14... merge master into benja2
  }
}
