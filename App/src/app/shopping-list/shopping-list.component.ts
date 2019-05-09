import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Caracteristica, Apartado} from '../shared/ingredient.module';
import { ApartadoListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ApartadoComponent implements OnInit {
  caracteristicas: Caracteristica[];
  apartados: Apartado[];

  constructor(private slService: ApartadoListService) {

  }
  ngOnInit() {

    this.apartados = this.slService.getApartados();
  }
}
