import { Component, OnInit, OnDestroy} from '@angular/core';
import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../../recipes/recipe.service';

import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-arrendador-list',
  templateUrl: './arrendador-list.component.html',
  styleUrls: ['./arrendador-list.component.css']
})
export class ArrendadorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
