import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAlunosComponent } from './route-alunos.component';

describe('RouteAlunosComponent', () => {
  let component: RouteAlunosComponent;
  let fixture: ComponentFixture<RouteAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
