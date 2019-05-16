import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorItemComponent } from './arrendador-item.component';

describe('ArrendadorItemComponent', () => {
  let component: ArrendadorItemComponent;
  let fixture: ComponentFixture<ArrendadorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendadorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
