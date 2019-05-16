import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../../recipes/recipe.service';
import {Apartado} from '../../shared/ingredient.module';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-arrendador-detail',
  templateUrl: './arrendador-detail.component.html',
  styleUrls: ['./arrendador-detail.component.css']
})
export class ArrendadorDetailComponent implements OnInit {
  tractor: Tractor;
  id: number;
  apartado: Apartado;

  constructor(private tractorService: TractorService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              console.log(this.id)
              this.id = +params['id'];
              this.tractor = this.tractorService.getTractor(this.id);
            }
        );
  }

  onAddToApartado() {
    this.tractorService.addTractoresToApartado(this.tractor.caracteristicas);
  }

  onAddToApartadoPrueba() {

    console.log(this.tractor.name + " // " + this.tractor.description + " // " + this.tractor.imagePath + " // " + this.tractor.status + " // " + this.tractor.precio );
    this.apartado = (new Apartado(this.tractor.name, this.tractor.description, this.tractor.imagePath, this.tractor.status = 'Apartado' , this.tractor.precio ));
    // this.tractorService.addTractoresToApartadoPrueba(this.apartado);
    this.tractorService.addApartados(this.apartado);
    this.dataStorageService.storeApartados().subscribe(
        (response: Response) => {
          console.log(response);
        }
    );
  }

  onEditTractor() {
    this.router.navigate([ 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractor() {
    this.tractorService.deleteTractor(this.id);
    this.router.navigate(['/tractores']);
  }

  onAutorizar() {

    this.tractor.status = 'Libre';
    console.log(this.tractor.name + " // " + this.tractor.description + " // " + this.tractor.imagePath + " // " + this.tractor.status + " // " + this.tractor.precio );
  }
}
