import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesCssComponent } from './botoes-css.component';

describe('BotoesCssComponent', () => {
  let component: BotoesCssComponent;
  let fixture: ComponentFixture<BotoesCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
