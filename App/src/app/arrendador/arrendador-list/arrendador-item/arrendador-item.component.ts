import { Component, OnInit, Input } from '@angular/core';

import { Tractor } from '../../../recipes/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrendador-item',
  templateUrl: './arrendador-item.component.html',
  styleUrls: ['./arrendador-item.component.css']
})
export class ArrendadorItemComponent implements OnInit {
  @Input() tractor: Tractor;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
