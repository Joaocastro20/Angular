import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTypescriptComponent } from './curso-typescript.component';

describe('CursoTypescriptComponent', () => {
  let component: CursoTypescriptComponent;
  let fixture: ComponentFixture<CursoTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoTypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
