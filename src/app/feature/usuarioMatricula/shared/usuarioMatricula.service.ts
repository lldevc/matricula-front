import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioMatricula } from './model/usuarioMatricula';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMatriculaService {

  constructor(protected httpClient: HttpClient) { }

  public actualizarDatos(usuairio: UsuarioMatricula) {
    return this.httpClient.put<UsuarioMatricula>(`/inscripcion-ms/usuarios-matricula/${usuairio.id}`, usuairio);
  }
}
