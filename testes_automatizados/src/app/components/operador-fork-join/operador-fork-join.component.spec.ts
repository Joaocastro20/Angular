import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorForkJoinComponent } from './operador-fork-join.component';

describe('OperadorForkJoinComponent', () => {
  let component: OperadorForkJoinComponent;
  let fixture: ComponentFixture<OperadorForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorForkJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
