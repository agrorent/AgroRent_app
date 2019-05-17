import { Component, OnInit } from '@angular/core';
import { Tractor } from 'src/app/recipes/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TractorService } from 'src/app/recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-precio',
  templateUrl: './posts-precio.component.html',
  styleUrls: ['./posts-precio.component.css']
})
export class PostsPrecioComponent implements OnInit {

  filterPostP = '';
  posts: Tractor[];
 
  constructor(private tractorService: TractorService) { }
  
  ngOnInit() {
    
    this.posts = this.tractorService.getTractores();
  }

}
