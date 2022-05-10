import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioMatricula } from './model/usuarioMatricula';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(protected httpClient: HttpClient) { }

  public consultarPorId(id: string) {
    return this.httpClient.get<UsuarioMatricula>(`/inscripcion-ms/matriculas/${id}`);
  }
}
