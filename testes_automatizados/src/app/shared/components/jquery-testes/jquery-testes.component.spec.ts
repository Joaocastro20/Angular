import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTestesComponent } from './jquery-testes.component';

describe('JqueryTestesComponent', () => {
  let component: JqueryTestesComponent;
  let fixture: ComponentFixture<JqueryTestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryTestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryTestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
