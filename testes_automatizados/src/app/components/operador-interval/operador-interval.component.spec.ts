import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorIntervalComponent } from './operador-interval.component';

describe('OperadorIntervalComponent', () => {
  let component: OperadorIntervalComponent;
  let fixture: ComponentFixture<OperadorIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
