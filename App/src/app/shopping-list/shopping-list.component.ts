import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica, Apartado} from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit, OnDestroy {
  caracteristicas: Caracteristica[];
  apartados: Apartado[];
  private subscription: Subscription;

  constructor(private slService: ApartadoListService,
              private dataStorageService: DataStorageService) {

  }
  ngOnInit() {
    // @ts-ignore
    this.apartados = this.dataStorageService.getApartados();
    this.dataStorageService.getApartados();
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
