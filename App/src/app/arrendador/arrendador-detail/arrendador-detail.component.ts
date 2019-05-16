import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrendador-detail',
  templateUrl: './arrendador-detail.component.html',
  styleUrls: ['./arrendador-detail.component.css']
})
export class ArrendadorDetailComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
  }

=======
  tractor: Tractor;
  id: number;
  apartado: Apartado;

  constructor(private tractorService: TractorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              console.log(params);
              this.id = +params['id'];
              this.tractor = this.tractorService.getTractor(this.id);
            }
        );
  }

  onAddToApartado() {
    this.tractorService.addTractoresToApartado(this.tractor.caracteristicas);
  }

  onAddToApartadoPrueba() {

    console.log(this.tractor.name + " // " + this.tractor.status );
    this.apartado = (new Apartado(this.tractor.name, this.tractor.status ));
    this.tractorService.addTractoresToApartadoPrueba( this.apartado);
  }

  onEditTractor() {
    this.router.navigate([ 'edit' ], {relativeTo: this.route});
    // this.router.navigate([ '../', this.id, 'edit' ], {relativeTo: this.route});
  }
  onDeleteTractor() {
    this.tractorService.deleteTractor(this.id);
    this.router.navigate(['/tractores']);
  }
>>>>>>> parent of 42accb14... merge master into benja2
}
