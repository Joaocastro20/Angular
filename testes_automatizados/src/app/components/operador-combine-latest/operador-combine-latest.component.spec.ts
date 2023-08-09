import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorCombineLatestComponent } from './operador-combine-latest.component';

describe('OperadorCombineLatestComponent', () => {
  let component: OperadorCombineLatestComponent;
  let fixture: ComponentFixture<OperadorCombineLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorCombineLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorCombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
