import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractores } from '../tractores.model';
import { TractoresService } from '../tractores.service';


@Component({
  selector: 'app-tractores-detail',
  templateUrl: './tractores-detail.component.html',
  styleUrls: ['./tractores-detail.component.css']
})
export class TractoresDetailComponent implements OnInit {
  tractores: Tractores;
  id: number;

  constructor(private tractoresService: TractoresService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.tractores = this.tractoresService.getTractores(this.id);
      }
    )
  }
  onAddToApartado() {
    this.tractoresService.addCaracteristicasToApartado(this.tractores.caracteristicas);
  }

  onEditTractores() {
     this.router.navigate([ 'edit' ], {relativeTo: this.route});
    //this.router.navigate([ '../', this.id, 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractores() {
    this.tractoresService.deleteTractores(this.id);
    this.router.navigate(['/tractores']);
  }
}
