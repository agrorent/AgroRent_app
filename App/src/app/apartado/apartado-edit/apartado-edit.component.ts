import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Caracteristica } from 'src/app/shared/caracteristica.module';
import { ApartadoService } from '../apartado.service';

@Component({
  selector: 'app-apartado-edit',
  templateUrl: './apartado-edit.component.html',
  styleUrls: ['./apartado-edit.component.css']
})
export class ApartadoEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Caracteristica;

  constructor(private slService: ApartadoService) { }

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
    const newCaracteristica = new Caracteristica(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateCaracteristica(this.editedItemIndex, newCaracteristica);
    } else {
      this.slService.addCaracteristica(newCaracteristica);
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
