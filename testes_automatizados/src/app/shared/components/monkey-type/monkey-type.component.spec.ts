import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyTypeComponent } from './monkey-type.component';

describe('MonkeyTypeComponent', () => {
  let component: MonkeyTypeComponent;
  let fixture: ComponentFixture<MonkeyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
