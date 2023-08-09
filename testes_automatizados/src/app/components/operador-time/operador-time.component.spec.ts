import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTimeComponent } from './operador-time.component';

describe('OperadorTimeComponent', () => {
  let component: OperadorTimeComponent;
  let fixture: ComponentFixture<OperadorTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
