import { Component, OnInit, OnDestroy} from '@angular/core';
import { Tractores } from '../tractores.model';
import { TractoresService } from '../tractores.service';

import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tractores-list',
  templateUrl: './tractores-list.component.html',
  styleUrls: ['./tractores-list.component.css']
})
export class TractoresListComponent implements OnInit, OnDestroy {
  tractoress: Tractores[] = [];
  subscription: Subscription

  constructor(private tractoresService: TractoresService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.tractoresService.tractoressChanged.
    subscribe(
      (tractoress: Tractores[]) => {
        this.tractoress = tractoress;
      }
    )
    this.tractoress = this.tractoresService.getTractoress();
  }

  onNewTractores() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
