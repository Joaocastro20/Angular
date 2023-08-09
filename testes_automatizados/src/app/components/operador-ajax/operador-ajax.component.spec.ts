import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorAjaxComponent } from './operador-ajax.component';

describe('OperadorAjaxComponent', () => {
  let component: OperadorAjaxComponent;
  let fixture: ComponentFixture<OperadorAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorAjaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
