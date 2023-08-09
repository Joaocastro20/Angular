import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorFindComponent } from './operador-find.component';

describe('OperadorFindComponent', () => {
  let component: OperadorFindComponent;
  let fixture: ComponentFixture<OperadorFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
