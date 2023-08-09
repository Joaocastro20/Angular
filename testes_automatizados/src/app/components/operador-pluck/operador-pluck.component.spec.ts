import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorPluckComponent } from './operador-pluck.component';

describe('OperadorPluckComponent', () => {
  let component: OperadorPluckComponent;
  let fixture: ComponentFixture<OperadorPluckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorPluckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorPluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
