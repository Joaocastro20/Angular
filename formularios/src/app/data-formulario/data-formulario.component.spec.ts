import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormularioComponent } from './data-formulario.component';

describe('DataFormularioComponent', () => {
  let component: DataFormularioComponent;
  let fixture: ComponentFixture<DataFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
