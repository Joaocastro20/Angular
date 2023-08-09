import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorMergeConcatComponent } from './operador-merge-concat.component';

describe('OperadorMergeConcatComponent', () => {
  let component: OperadorMergeConcatComponent;
  let fixture: ComponentFixture<OperadorMergeConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorMergeConcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorMergeConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
