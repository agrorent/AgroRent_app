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
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: TractorService,
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
        this.recipeService.updateTractor(this.id, this.recipeForm.value);
      } else {
        this.recipeService.addTractor(this.recipeForm.value);
    }
      this.onCancel();
  }

  onAddCaracteristica() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
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
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getTractor(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
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

    this.recipeForm = new FormGroup({
// tslint:disable-next-line: object-literal-key-quotes
      'name': new FormControl(recipeName, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'imagePath': new FormControl(recipeImagePath, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'description': new FormControl(recipeDescription, Validators.required ),
      'ingredients': recipeIngredients
    });
  }
  onDeleteCaracteristica(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
