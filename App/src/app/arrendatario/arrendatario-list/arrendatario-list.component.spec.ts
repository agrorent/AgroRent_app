import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioListComponent } from './arrendatario-list.component';

describe('ArrendatarioListComponent', () => {
  let component: ArrendatarioListComponent;
  let fixture: ComponentFixture<ArrendatarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendatarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendatarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
