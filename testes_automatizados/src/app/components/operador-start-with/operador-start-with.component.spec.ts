import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorStartWithComponent } from './operador-start-with.component';

describe('OperadorStartWithComponent', () => {
  let component: OperadorStartWithComponent;
  let fixture: ComponentFixture<OperadorStartWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorStartWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorStartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
