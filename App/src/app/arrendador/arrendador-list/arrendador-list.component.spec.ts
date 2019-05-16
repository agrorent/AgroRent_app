import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorListComponent } from './arrendador-list.component';

describe('ArrendadorListComponent', () => {
  let component: ArrendadorListComponent;
  let fixture: ComponentFixture<ArrendadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
