import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCursoNaoEncontradoComponent } from './route-curso-nao-encontrado.component';

describe('RouteCursoNaoEncontradoComponent', () => {
  let component: RouteCursoNaoEncontradoComponent;
  let fixture: ComponentFixture<RouteCursoNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCursoNaoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCursoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
