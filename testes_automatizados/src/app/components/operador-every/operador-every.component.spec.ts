import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorEveryComponent } from './operador-every.component';

describe('OperadorEveryComponent', () => {
  let component: OperadorEveryComponent;
  let fixture: ComponentFixture<OperadorEveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorEveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorEveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
