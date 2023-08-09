import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorSwitchMapComponent } from './operador-switch-map.component';

describe('OperadorSwitchMapComponent', () => {
  let component: OperadorSwitchMapComponent;
  let fixture: ComponentFixture<OperadorSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorSwitchMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
