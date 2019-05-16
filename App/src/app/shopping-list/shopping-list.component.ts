import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica, Apartado} from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';
import {TractorService} from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit {
  caracteristicas: Caracteristica[];
  apartados: Apartado[];
  private subscription: Subscription;

  constructor(private slService: ApartadoListService,
              private tractorService: TractorService,
              private dataStorageService: DataStorageService) {

  }
  ngOnInit() {
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
    this.apartados = this.tractorService.getApartados();
  }
}
