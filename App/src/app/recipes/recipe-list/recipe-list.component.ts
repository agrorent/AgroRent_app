import { Component, OnInit, OnDestroy} from '@angular/core';
import { Tractor } from '../recipe.model';
import { TractorService } from '../recipe.service';

import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class TractorListComponent implements OnInit, OnDestroy {
  recipes: Tractor[] = [];
  subscription: Subscription

  constructor(private recipeService: TractorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.TractoresChanged.
    subscribe(
      (recipes: Tractor[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getTractores();
  }

  onNewTractor() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
