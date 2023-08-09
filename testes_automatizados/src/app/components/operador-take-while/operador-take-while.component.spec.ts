import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTakeWhileComponent } from './operador-take-while.component';

describe('OperadorTakeWhileComponent', () => {
  let component: OperadorTakeWhileComponent;
  let fixture: ComponentFixture<OperadorTakeWhileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorTakeWhileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTakeWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
