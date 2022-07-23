import { TestBed } from '@angular/core/testing';

import { RouteAlunosService } from './route-alunos.service';

describe('RouteAlunosService', () => {
  let service: RouteAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
