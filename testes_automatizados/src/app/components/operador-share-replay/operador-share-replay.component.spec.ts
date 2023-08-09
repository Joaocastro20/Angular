import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorShareReplayComponent } from './operador-share-replay.component';

describe('OperadorShareReplayComponent', () => {
  let component: OperadorShareReplayComponent;
  let fixture: ComponentFixture<OperadorShareReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorShareReplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorShareReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
