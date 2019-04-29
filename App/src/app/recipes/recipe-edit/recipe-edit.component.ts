import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TractorService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  
})
export class TractorEditComponent implements OnInit {
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
    }
      this.onCancel();
  }

  onAddCaracteristica() {
    (<FormArray> this.tractorForm.get('ingredients')).push(
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
    let tractorImagePath = '';
    let tractorDescription = '';
    let tractorIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.tractorService.getTractor(this.id);
      tractorName = recipe.name;
      tractorImagePath = recipe.imagePath;
      tractorDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.caracteristicas) {
          tractorIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
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
      'imagePath': new FormControl(tractorImagePath, Validators.required),
      'description': new FormControl(tractorDescription, Validators.required ),
      'ingredients': tractorIngredients
    });
  }
  onDeleteCaracteristica(index: number) {
    (<FormArray>this.tractorForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.tractorForm.get('ingredients')).controls;
  }
}
