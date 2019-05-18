import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../../recipes/recipe.service';
import {Apartado} from '../../shared/ingredient.module';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';
import {MessagesService} from '../../messages/messages.service';

import * as $ from 'jquery';
import {ApartadoListService} from '../../shopping-list/shopping-list.service';

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
              private dataStorageService: DataStorageService,
              private messageService: MessagesService,
              private ApartadoService: ApartadoListService) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              console.log(this.id)
              this.id = +params['id'];
              this.tractor = this.tractorService.getTractor(this.id);
            }
        );

      $(document).ready(function(){
          $("#calcular").click(function () {
              console.log("calculate");

              var horas = $("#numHoras").val();
              var precio = $("#inputPrecio").val();
              var total = horas * precio;

              $("#precio-display").append(total);
          });
      });
  }
    onAddToApartadoPrueba() {
        const name = this.tractor.name;
        const desc = this.tractor.description;
        const imageP = this.tractor.imagePath;
        const status = this.tractor.status = 'Apartado';
        const precio = this.tractor.precio;


        console.log(name, desc, imageP, status, precio );
        this.apartado = (new Apartado(name, desc, imageP, status, precio ));
        this.ApartadoService.addApartadosPrueba(this.apartado, (msg: string)=>{  this.messageService.errorSingin(msg); });

        this.dataStorageService.storeApartados()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }
}
