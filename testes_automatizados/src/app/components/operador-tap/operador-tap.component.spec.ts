import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTapComponent } from './operador-tap.component';

describe('OperadorTapComponent', () => {
  let component: OperadorTapComponent;
  let fixture: ComponentFixture<OperadorTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
