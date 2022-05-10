import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { HttpClient } from "@angular/common/http";
import { MatriculaCrearRequest } from "../model/MatriculaCrearRequest"
import { Matricula } from '../model/Matricula';
import { MatriculaCrearResponse } from "../model/MatriculaCrearResponse";
import { MatriculaPagarRequest } from "../model/MatriculaPagarRequest";

@Injectable()
export class MatriculaService {

  constructor(protected http: HttpService, protected httpClient: HttpClient) { }

  public consultarPorId(id: string) {
    return this.http.doGet<Matricula>(`/inscripcion-ms/matriculas/${id}`, this.http.optsName('listar matricula por id'));
  }

  public consultarPorIdentificacionDeUsuario(id: string) {
    return this.http.doGet<Matricula[]>(`/inscripcion-ms/matriculas/usuarios/numero-identificacion/${id}`, this.http.optsName('listar matricula por identificacion de usuario'));
  }

  public guardar(matricularCrearRequest: MatriculaCrearRequest) {
    return this.http.doPost<MatriculaCrearRequest, MatriculaCrearResponse>('/inscripcion-ms/matriculas', matricularCrearRequest,
      this.http.optsName('crear/actualizar matricula'));
  }

  public pagar(matricularPagarRequest: MatriculaPagarRequest) {
    return this.httpClient.put<MatriculaCrearRequest>(`/inscripcion-ms/matriculas/pagar/${matricularPagarRequest.id}`, matricularPagarRequest,
      this.http.optsName('pagar matricula'));
  }
}