import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Tractor } from '../recipe.model';
import { TractorService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class TractorDetailComponent implements OnInit {
  tractor: Tractor;
  id: number;

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

  onEditTractor() {
     this.router.navigate([ 'edit' ], {relativeTo: this.route});
    // this.router.navigate([ '../', this.id, 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractor() {
    this.tractorService.deleteTractor(this.id);
    this.router.navigate(['/recipes']);
  }
}
