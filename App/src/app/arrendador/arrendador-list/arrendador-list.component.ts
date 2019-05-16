<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../../recipes/recipe.service';

import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
>>>>>>> parent of 42accb14... merge master into benja2

@Component({
  selector: 'app-arrendador-list',
  templateUrl: './arrendador-list.component.html',
  styleUrls: ['./arrendador-list.component.css']
})
<<<<<<< HEAD
export class ArrendadorListComponent implements OnInit {

  constructor() { }
=======
export class ArrendadorListComponent implements OnInit, OnDestroy {
  tractores: Tractor[] = [];
  subscription: Subscription

  constructor(private recipeService: TractorService,
              private router: Router,
              private route: ActivatedRoute) {
  }
>>>>>>> parent of 42accb14... merge master into benja2

  ngOnInit() {
  }

}
