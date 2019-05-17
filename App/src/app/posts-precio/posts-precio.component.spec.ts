import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPrecioComponent } from './posts-precio.component';

describe('PostsPrecioComponent', () => {
  let component: PostsPrecioComponent;
  let fixture: ComponentFixture<PostsPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
