import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorMapToComponent } from './operador-map-to.component';

describe('OperadorMapToComponent', () => {
  let component: OperadorMapToComponent;
  let fixture: ComponentFixture<OperadorMapToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorMapToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
