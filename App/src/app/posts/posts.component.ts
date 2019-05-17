import { Component, OnInit } from '@angular/core';
import { Tractor } from 'src/app/recipes/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TractorService } from 'src/app/recipes/recipe.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  filterPost = '';
  posts: Tractor[];
 
  constructor(private tractorService: TractorService) { }
  
  ngOnInit() {
    
    this.posts = this.tractorService.getTractores();
  }

}