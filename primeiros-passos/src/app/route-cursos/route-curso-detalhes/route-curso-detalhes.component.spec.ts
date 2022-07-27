import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCursoDetalhesComponent } from './route-curso-detalhes.component';

describe('RouteCursoDetalhesComponent', () => {
  let component: RouteCursoDetalhesComponent;
  let fixture: ComponentFixture<RouteCursoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCursoDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCursoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
