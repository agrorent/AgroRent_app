import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioItemComponent } from './arrendatario-item.component';

describe('ArrendatarioItemComponent', () => {
  let component: ArrendatarioItemComponent;
  let fixture: ComponentFixture<ArrendatarioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendatarioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendatarioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
