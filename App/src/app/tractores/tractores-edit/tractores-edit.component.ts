import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TractoresService } from '../tractores.service';

@Component({
  selector: 'app-tractores-edit',
  templateUrl: './tractores-edit.component.html',
  styleUrls: ['./tractores-edit.component.css']
})
export class TractoresEditComponent implements OnInit {
  id: number;
  editMode = false;
  tractoresForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private tractoresService: TractoresService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
// tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
// tslint:disable-next-line: no-string-literal
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
      if (this.editMode) {
        this.tractoresService.updateTractores(this.id, this.tractoresForm.value);
      } else {
        this.tractoresService.addTractores(this.tractoresForm.value);
    }
      this.onCancel();
  }

  onAddCaracteristica() {
    (<FormArray> this.tractoresForm.get('caracteristicas')).push(
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
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let tractoresName = '';
    let tractoresImagePath = '';
    let tractoresDescription = '';
    let tractoresCaracteristicas = new FormArray([]);

    if (this.editMode) {
      const tractores = this.tractoresService.getTractores(this.id);
      tractoresName = tractores.name;
      tractoresImagePath = tractores.imagePath;
      tractoresDescription = tractores.description;
      
      if (tractores['caracteristicas']) {
        for (let caracteristica of tractores.caracteristicas) {
          tractoresCaracteristicas.push(
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

    this.tractoresForm = new FormGroup({
// tslint:disable-next-line: object-literal-key-quotes
      'name': new FormControl(tractoresName, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'imagePath': new FormControl(tractoresImagePath, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'description': new FormControl(tractoresDescription, Validators.required ),
      'caracteristicas': tractoresCaracteristicas
    });
  }
  onDeleteCaracteristica(index: number) {
    (<FormArray>this.tractoresForm.get('caracteristicas')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.tractoresForm.get('caracteristicas')).controls;
  }
}
