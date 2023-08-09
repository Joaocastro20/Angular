import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorFindIndexComponent } from './operador-find-index.component';

describe('OperadorFindIndexComponent', () => {
  let component: OperadorFindIndexComponent;
  let fixture: ComponentFixture<OperadorFindIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorFindIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorFindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
