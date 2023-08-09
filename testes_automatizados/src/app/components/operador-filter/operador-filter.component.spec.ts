import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorFilterComponent } from './operador-filter.component';

describe('OperadorFilterComponent', () => {
  let component: OperadorFilterComponent;
  let fixture: ComponentFixture<OperadorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
