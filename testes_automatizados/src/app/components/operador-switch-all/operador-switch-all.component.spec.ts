import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorSwitchAllComponent } from './operador-switch-all.component';

describe('OperadorSwitchAllComponent', () => {
  let component: OperadorSwitchAllComponent;
  let fixture: ComponentFixture<OperadorSwitchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorSwitchAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorSwitchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
