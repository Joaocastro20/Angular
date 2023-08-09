import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorIsEmptyComponent } from './operador-is-empty.component';

describe('OperadorIsEmptyComponent', () => {
  let component: OperadorIsEmptyComponent;
  let fixture: ComponentFixture<OperadorIsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorIsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorIsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
