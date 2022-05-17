import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { MatriculaService } from './matricula.service';
import { Matricula } from '../model/Matricula';
import { Programa } from '@programa/shared/model/programa';
import { UsuarioMatricula } from 'src/app/feature/usuarioMatricula/shared/model/usuarioMatricula';
import { MatriculaCrearRequest } from '../model/MatriculaCrearRequest';
import { MatriculaCrearResponse } from '../model/MatriculaCrearResponse';
import { HttpResponse } from '@angular/common/http';
import { MatriculaPagarRequest } from '../model/MatriculaPagarRequest';

describe('MatriculaService', () => {

  let service: MatriculaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatriculaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MatriculaService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar matricula por id', () => {
    const dummyMatricula = new Matricula(
      1000,
      700000.0,
      false,
      'PENDIENTE',
      new Date('2022-04-01'),
      new Date('2022-04-08'),
      new Date('2022-04-17'),
      new Programa(1, 'Ingles', 700000, 0.2, 5),
      new UsuarioMatricula(1, 1111, 'test', 'test@test.com', 'test', 'test')
    );
    service.consultarPorId('1000').subscribe(matricula => {
      expect(matricula).toEqual(dummyMatricula);
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/1000');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMatricula);
  });

  it('deberia listar matricula por numero identificacion usuario', () => {
    const listDummyMatricula = [new Matricula(
      1000,
      700000.0,
      false,
      'PENDIENTE',
      new Date('2022-04-01'),
      new Date('2022-04-08'),
      new Date('2022-04-17'),
      new Programa(1, 'Ingles', 700000, 0.2, 5),
      new UsuarioMatricula(1, 1111, 'test', 'test@test.com', 'test', 'test')
    )];
    service.consultarPorIdentificacionDeUsuario('1111').subscribe(matriculas => {
      expect(matriculas.length).toBe(1);
      expect(matriculas).toEqual(listDummyMatricula);
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/usuarios/numero-identificacion/1111');
    expect(req.request.method).toBe('GET');
    req.flush(listDummyMatricula);
  });

  it('deberia crear una matricula', () => {
    const dummyMatriculaRequest: MatriculaCrearRequest = {
      programa: new Programa(1, 'Ingles', 700000, 0.2, 5),
      usuarioMatricula: {
        numeroIdentificacion: 1111,
        nombre: 'test',
        email: 'test@test.com',
        ciudad: 'test',
        direccion: 'test'
      }
    };

    const dummyMatriculaRespone: MatriculaCrearResponse = {
      valor: 1001
    };

    service.guardar(dummyMatriculaRequest).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyMatriculaRespone);
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<MatriculaCrearResponse>({ body: dummyMatriculaRespone }));
  });

  it('deberia actualizar el estado de pago de la matricula', () => {
    const dummyMatriculaPagarRequest: MatriculaPagarRequest = {
      id: 1000,
      valor: 700000.0,
      recargo: false,
      estadoDePago: 'PENDIENTE',
      fechaCreacion: new Date('2022-04-01'),
      fechaLimitePagoSinRecargo: new Date('2022-04-08'),
      fechaMaximaPago: new Date('2022-04-17'),
      programa: new Programa(1, 'Ingles', 700000, 0.2, 5),
      usuarioMatricula: new UsuarioMatricula(1, 1111, 'test', 'test@test.com', 'test', 'test'),
      medioDePago: {
        numeroTarjeta: '1111222233334444',
        anioVecimiento: '2050',
        mesVecimiento: '12',
        codigoSeguridad: '123'
      }
    };

    service.pagar(dummyMatriculaPagarRequest).subscribe((res) => {
      expect(res).toBeNull();
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/pagar/1000');
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<MatriculaPagarRequest>({ body: null }));
  });

});
