import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorDebounceTimeComponent } from './operador-debounce-time.component';

describe('OperadorDebounceTimeComponent', () => {
  let component: OperadorDebounceTimeComponent;
  let fixture: ComponentFixture<OperadorDebounceTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorDebounceTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
