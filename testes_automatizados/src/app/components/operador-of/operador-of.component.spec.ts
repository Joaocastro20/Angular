import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorOfComponent } from './operador-of.component';

describe('OperadorOfComponent', () => {
  let component: OperadorOfComponent;
  let fixture: ComponentFixture<OperadorOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
