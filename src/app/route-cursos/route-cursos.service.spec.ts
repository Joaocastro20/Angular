import { TestBed } from '@angular/core/testing';

import { RouteCursosService } from './route-cursos.service';

describe('RouteCursosService', () => {
  let service: RouteCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
