import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorDelayComponent } from './operador-delay.component';

describe('OperadorDelayComponent', () => {
  let component: OperadorDelayComponent;
  let fixture: ComponentFixture<OperadorDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorDelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
