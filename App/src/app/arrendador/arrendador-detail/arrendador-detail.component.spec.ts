import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorDetailComponent } from './arrendador-detail.component';

describe('ArrendadorDetailComponent', () => {
  let component: ArrendadorDetailComponent;
  let fixture: ComponentFixture<ArrendadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
