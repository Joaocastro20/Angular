import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorShareComponent } from './operador-share.component';

describe('OperadorShareComponent', () => {
  let component: OperadorShareComponent;
  let fixture: ComponentFixture<OperadorShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
