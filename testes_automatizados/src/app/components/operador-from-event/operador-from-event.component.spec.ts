import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorFromEventComponent } from './operador-from-event.component';

describe('OperadorFromEventComponent', () => {
  let component: OperadorFromEventComponent;
  let fixture: ComponentFixture<OperadorFromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorFromEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
