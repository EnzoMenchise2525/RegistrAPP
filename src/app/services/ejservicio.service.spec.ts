import { TestBed } from '@angular/core/testing';

import { EjservicioService } from './ejservicio.service';

describe('EjservicioService', () => {
  let service: EjservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
