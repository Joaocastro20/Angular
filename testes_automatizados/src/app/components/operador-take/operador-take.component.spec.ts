import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTakeComponent } from './operador-take.component';

describe('OperadorTakeComponent', () => {
  let component: OperadorTakeComponent;
  let fixture: ComponentFixture<OperadorTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorTakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
