import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioDetailComponent } from './arrendatario-detail.component';

describe('ArrendatarioDetailComponent', () => {
  let component: ArrendatarioDetailComponent;
  let fixture: ComponentFixture<ArrendatarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendatarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendatarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
