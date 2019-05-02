import { Component, OnInit } from '@angular/core';
import {TractorService} from '../../recipes/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-arrendatario-list',
  templateUrl: './arrendatario-list.component.html',
  styleUrls: ['./arrendatario-list.component.css']
})
export class ArrendatarioListComponent implements OnInit {

  constructor(private recipeService: TractorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onNewTractor() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
