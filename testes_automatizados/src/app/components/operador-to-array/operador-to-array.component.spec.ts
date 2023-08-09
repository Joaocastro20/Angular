import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorToArrayComponent } from './operador-to-array.component';

describe('OperadorToArrayComponent', () => {
  let component: OperadorToArrayComponent;
  let fixture: ComponentFixture<OperadorToArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorToArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorToArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
