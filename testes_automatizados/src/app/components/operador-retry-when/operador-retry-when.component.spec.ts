import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorRetryWhenComponent } from './operador-retry-when.component';

describe('OperadorRetryWhenComponent', () => {
  let component: OperadorRetryWhenComponent;
  let fixture: ComponentFixture<OperadorRetryWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorRetryWhenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorRetryWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
