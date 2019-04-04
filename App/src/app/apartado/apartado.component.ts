import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica } from '../shared/caracteristica.module';
import { ApartadoService } from './apartado.service';

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styleUrls: ['./apartado.component.css']
})
export class ApartadoComponent implements OnInit, OnDestroy {
  caracteristicas: Caracteristica[];
  private subscription: Subscription;

  constructor(private slService: ApartadoService) {

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
