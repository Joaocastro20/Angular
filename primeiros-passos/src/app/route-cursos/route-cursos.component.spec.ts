import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCursosComponent } from './route-cursos.component';

describe('RouteCursosComponent', () => {
  let component: RouteCursosComponent;
  let fixture: ComponentFixture<RouteCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
