import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorWithLastestFromComponent } from './operador-with-lastest-from.component';

describe('OperadorWithLastestFromComponent', () => {
  let component: OperadorWithLastestFromComponent;
  let fixture: ComponentFixture<OperadorWithLastestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorWithLastestFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorWithLastestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
