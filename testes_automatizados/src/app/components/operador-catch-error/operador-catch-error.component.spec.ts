import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorCatchErrorComponent } from './operador-catch-error.component';

describe('OperadorCatchErrorComponent', () => {
  let component: OperadorCatchErrorComponent;
  let fixture: ComponentFixture<OperadorCatchErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorCatchErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorCatchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
