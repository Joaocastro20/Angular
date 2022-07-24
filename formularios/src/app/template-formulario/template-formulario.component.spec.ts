import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormularioComponent } from './template-formulario.component';

describe('TemplateFormularioComponent', () => {
  let component: TemplateFormularioComponent;
  let fixture: ComponentFixture<TemplateFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
