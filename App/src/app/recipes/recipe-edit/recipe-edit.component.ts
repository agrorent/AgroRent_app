import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TractorService } from '../recipe.service';
import {MessagesService} from '../../messages/messages.service';
import {Response} from '@angular/http';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class TractorEditComponent implements OnInit {
  id: number;
  editMode = false;
  tractorForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private tractorService: TractorService,
              private router: Router,
              private messageService: MessagesService,
              private dataStorageService: DataStorageService) { }

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
        this.tractorService.updateTractor(this.id, this.tractorForm.value, (msg: string)=>{  this.messageService.errorSingin(msg); });
      } else {
        this.tractorService.addTractor(this.tractorForm.value, (msg: string)=>{  this.messageService.errorSingin(msg); });
    }
      this.onCancel();

      this.dataStorageService.storeTractores()
        .subscribe(
            (response: Response) => {
              console.log(response);
            }
        );
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
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let tractorName = '';
    let tractorPrecio;
    let tractorImagePath = '';
    let tractorDescription = '';
    let tractorStatus = '';
    let tractorCaracteristicas = new FormArray([]);

    if (this.editMode) {
      const tractor = this.tractorService.getTractor(this.id);
      tractorName = tractor.name;
      tractorImagePath = tractor.imagePath;
      tractorDescription = tractor.description;
      tractorPrecio = tractor.precio;
      tractorStatus = tractor.status;
      if (tractor['caracteristicas']) {
        for (let caracteristica of tractor.caracteristicas) {
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
    (<FormArray>this.tractorForm.get('caracteristicas')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.tractorForm.get('caracteristicas')).controls;
  }
}
