import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsuarioMatriculaService } from './usuarioMatricula.service';

describe('UsuarioMatriculaService', () => {

  let service: UsuarioMatriculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioMatriculaService]
    });
    service = TestBed.inject(UsuarioMatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
