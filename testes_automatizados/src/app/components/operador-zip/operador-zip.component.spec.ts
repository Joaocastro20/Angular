import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorZipComponent } from './operador-zip.component';

describe('OperadorZipComponent', () => {
  let component: OperadorZipComponent;
  let fixture: ComponentFixture<OperadorZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorZipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
