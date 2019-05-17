import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDisponibilidadComponent } from './posts-disponibilidad.component';

describe('PostsDisponibilidadComponent', () => {
  let component: PostsDisponibilidadComponent;
  let fixture: ComponentFixture<PostsDisponibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDisponibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
