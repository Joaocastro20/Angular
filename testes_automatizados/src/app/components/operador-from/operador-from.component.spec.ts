import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorFromComponent } from './operador-from.component';

describe('OperadorFromComponent', () => {
  let component: OperadorFromComponent;
  let fixture: ComponentFixture<OperadorFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
