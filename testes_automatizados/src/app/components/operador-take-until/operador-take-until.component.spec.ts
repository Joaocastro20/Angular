import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTakeUntilComponent } from './operador-take-until.component';

describe('OperadorTakeUntilComponent', () => {
  let component: OperadorTakeUntilComponent;
  let fixture: ComponentFixture<OperadorTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorTakeUntilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
