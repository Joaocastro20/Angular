import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorRetryComponent } from './operador-retry.component';

describe('OperadorRetryComponent', () => {
  let component: OperadorRetryComponent;
  let fixture: ComponentFixture<OperadorRetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorRetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
