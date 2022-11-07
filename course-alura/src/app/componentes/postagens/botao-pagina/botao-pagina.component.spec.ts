import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPaginaComponent } from './botao-pagina.component';

describe('BotaoPaginaComponent', () => {
  let component: BotaoPaginaComponent;
  let fixture: ComponentFixture<BotaoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
