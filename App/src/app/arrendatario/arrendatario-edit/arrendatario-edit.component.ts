import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { TractorService} from '../../recipes/recipe.service';

@Component({
  selector: 'app-arrendatario-edit',
  templateUrl: './arrendatario-edit.component.html',
  styleUrls: ['./arrendatario-edit.component.css']
})

export class ArrendatarioEditComponent implements OnInit {
  id: number;
  editMode = false;
  tractorForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private tractorService: TractorService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.editMode = params['id'] != null;
              this.initForm();
            }
        );
  }

  onSubmit() {
    if (this.editMode) {
      this.tractorService.updateTractor(this.id, this.tractorForm.value);
    } else {
      this.tractorService.addTractor(this.tractorForm.value);
      console.log(this.tractorForm.value);
    }
    this.onCancel();
  }

  onAddCaracteristica() {
    (<FormArray> this.tractorForm.get('caracteristicas')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
    );
  }

  onCancel() {
    this.router.navigate(['/tractores'], {relativeTo: this.route});
  }

  private initForm() {
    let tractorName = '';
    let tractorPrecio;
    let tractorImagePath = '';
    let tractorDescription = '';
    let tractorStatus = '';
    let tractorCaracteristicas = new FormArray([]);

    if (this.editMode) {
      const recipe = this.tractorService.getTractor(this.id);
      tractorName = recipe.name;
      tractorImagePath = recipe.imagePath;
      tractorDescription = recipe.description;
      tractorPrecio = recipe.precio;
      tractorStatus = recipe.status;
      if (recipe['caracteristicas']) {
        for (let caracteristica of recipe.caracteristicas) {
          tractorCaracteristicas.push(
              new FormGroup({
                'name': new FormControl(caracteristica.name, Validators.required),
                'amount': new FormControl(caracteristica.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
          );
        }
      }
    }

    this.tractorForm = new FormGroup({

      'name': new FormControl(tractorName, Validators.required),
      'precio': new FormControl(tractorPrecio, Validators.required ),
      'imagePath': new FormControl(tractorImagePath, Validators.required),
      'description': new FormControl(tractorDescription, Validators.required ),
      'status': new FormControl(tractorStatus, Validators.required ),
      'caracteristicas': tractorCaracteristicas
    });
  }

  onDeleteCaracteristica(index: number) {
    (<FormArray> this.tractorForm.get('caracteristicas')).removeAt(index);
  }

  getControls() {
    return (<FormArray> this.tractorForm.get('caracteristicas')).controls;
  }
}
