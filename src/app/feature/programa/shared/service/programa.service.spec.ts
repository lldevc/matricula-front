import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ProgramaService } from './programa.service';
import { Programa } from '../model/programa';

describe('ProgramaService', () => {
  let httpMock: HttpTestingController;
  let service: ProgramaService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProgramaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar los programas', () => {
    const dummyProgramas = [
      new Programa(1, 'Ingles', 700000, 0.2, 5), new Programa(2, 'Frances', 850000, 0.2, 7), new Programa(3, 'Aleman', 980000, 0.2, 9)
    ];
    service.consultar().subscribe(Programas => {
      expect(Programas.length).toBe(3);
      expect(Programas).toEqual(dummyProgramas);
    });
    const req = httpMock.expectOne('/inscripcion-ms/programas');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProgramas);
  });
});
