import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlgoServiceComponent } from './criar-algo-service.component';

describe('CriarAlgoServiceComponent', () => {
  let component: CriarAlgoServiceComponent;
  let fixture: ComponentFixture<CriarAlgoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAlgoServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAlgoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
