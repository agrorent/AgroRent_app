import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractor } from '../recipe.model';
import { TractorService } from '../recipe.service';
import {Apartado} from '../../shared/ingredient.module';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';
import {MessagesService} from '../../messages/messages.service';
import { ApartadoListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class TractorDetailComponent implements OnInit {
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
  }

  onAddToApartado() {
    this.tractorService.addTractoresToApartado(this.tractor.caracteristicas);
  }

  onAddToApartadoPrueba() {
    const name = this.tractor.name;
    const desc = this.tractor.description;
    const imageP = this.tractor.imagePath;
    const status = this.tractor.status = 'Apartado';
    const precio = this.tractor.precio;


    console.log(name, desc, imageP, status, precio );
    this.apartado = (new Apartado(name, desc, imageP, status, precio ));
    this.tractorService.addTractoresToApartadoPrueba(this.apartado, (msg: string)=>{  this.messageService.errorSingin(msg); });

    this.dataStorageService.storeApartados()
        .subscribe(
            (response: Response) => {
              console.log(response);
            }
        );
  }

  onEditTractor() {
    this.router.navigate([ 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractor() {
    this.tractorService.deleteTractor(this.id, (msg: string)=>{  this.messageService.errorSingin(msg);});
    this.router.navigate(['/admin']);
  }

  onAutorizar() {
    this.tractorService.onAutorizar((msg: string)=>{  this.messageService.errorSingin(msg);})
    this.tractor.status = 'Libre';
    console.log(this.tractor.name + " // " + this.tractor.description + " // " + this.tractor.imagePath + " // " + this.tractor.status + " // " + this.tractor.precio );
  }
}
