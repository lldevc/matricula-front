import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsuarioMatricula } from './model/usuarioMatricula';
import { HttpResponse } from '@angular/common/http';


import { UsuarioMatriculaService } from './usuarioMatricula.service';

describe('UsuarioMatriculaService', () => {
  let httpMock: HttpTestingController;
  let service: UsuarioMatriculaService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioMatriculaService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioMatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar null y hacer peticion al metodo PUT', () => {
    
    const mockUsuarioMatricula: UsuarioMatricula = {
      id: 1,
      numeroIdentificacion: 11,
      nombre: 'test',
      email: 'test@test.com',
      ciudad: 'test',
      direccion: 'test'
    }

    service.actualizarDatos(mockUsuarioMatricula).subscribe( (res) => {
      expect(res).toBeNull()
    });
    const req = httpMock.expectOne('/inscripcion-ms/usuarios-matricula/1');
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: null}));
  });
});
