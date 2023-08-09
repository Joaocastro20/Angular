import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorSkipComponent } from './operador-skip.component';

describe('OperadorSkipComponent', () => {
  let component: OperadorSkipComponent;
  let fixture: ComponentFixture<OperadorSkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorSkipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
