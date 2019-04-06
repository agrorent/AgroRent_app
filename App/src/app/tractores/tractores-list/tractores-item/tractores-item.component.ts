import { Component, OnInit, Input } from '@angular/core';

import { Tractores } from '../../tractores.model';

@Component({
  selector: 'app-tractores-item',
  templateUrl: './tractores-item.component.html',
  styleUrls: ['./tractores-item.component.css']
})
export class TractoresItemComponent implements OnInit {
  @Input() tractores: Tractores;
  @Input() index: number;

  ngOnInit() {
  }
}
