import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Caracteristica } from 'src/app/shared/ingredient.module';
import { ApartadoListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ApartadoEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Caracteristica;

  constructor(private slService: ApartadoListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.
    subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getCaracteristica(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Caracteristica(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateCaracteristica(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addCaracteristica(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteCaracteristica(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
