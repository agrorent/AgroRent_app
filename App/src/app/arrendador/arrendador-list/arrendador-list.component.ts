import { Component, OnInit, OnDestroy} from '@angular/core';
import { Tractor } from '../../recipes/recipe.model';
import { TractorService } from '../../recipes/recipe.service';

import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrendador-list',
  templateUrl: './arrendador-list.component.html',
})

export class ArrendadorListComponent implements OnInit, OnDestroy {
  tractores: Tractor[] = [];
  subscription: Subscription

  constructor(private recipeService: TractorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.TractoresChanged.
    subscribe(
        (recipes: Tractor[]) => {
          this.tractores = recipes;
        }
    )
    this.tractores = this.recipeService.getTractores();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
