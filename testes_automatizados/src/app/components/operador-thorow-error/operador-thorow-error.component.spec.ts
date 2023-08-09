import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorThorowErrorComponent } from './operador-thorow-error.component';

describe('OperadorThorowErrorComponent', () => {
  let component: OperadorThorowErrorComponent;
  let fixture: ComponentFixture<OperadorThorowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorThorowErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorThorowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
