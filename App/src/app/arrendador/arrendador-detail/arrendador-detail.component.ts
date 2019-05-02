import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../recipe.service';
import {Apartado} from '../../shared/ingredient.module';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './arrendador-detail.component.html',
  styleUrls: ['./arrendador-detail.component.css']
})
export class ArrendadorDetailComponent implements OnInit {
  tractor: Tractor;
  id: number;
  apartados: Apartado[];

  constructor(private tractorService: TractorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.tractor = this.tractorService.getTractor(this.id);
            }
        );
  }
  onAddToApartado() {
    this.tractorService.addTractoresToApartado(this.tractor.caracteristicas);
  }

  onAddToApartadoPrueba() {
    this.tractorService.addTractoresToApartadoPrueba(this.apartados);
  }

  onEditTractor() {
    this.router.navigate([ 'edit' ], {relativeTo: this.route});
    // this.router.navigate([ '../', this.id, 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractor() {
    this.tractorService.deleteTractor(this.id);
    this.router.navigate(['/tractores']);
  }
}
