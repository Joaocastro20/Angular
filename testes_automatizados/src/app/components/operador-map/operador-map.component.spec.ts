import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorMapComponent } from './operador-map.component';

describe('OperadorMapComponent', () => {
  let component: OperadorMapComponent;
  let fixture: ComponentFixture<OperadorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
