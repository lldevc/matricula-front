import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { MatriculaCrearRequest } from "../model/MatriculaCrearRequest"
import { Matricula } from '../model/matricula';

@Injectable()
export class MatriculaService {

    constructor(protected http: HttpService) {}

    public guardar(matricularCrearRequest: MatriculaCrearRequest) {
        return this.http.doPost<MatriculaCrearRequest, Response>('/inscripcion-ms/matriculas', matricularCrearRequest,
                                                    this.http.optsName('crear/actualizar matricula'));
      }

      public consultarPorId(id: string) {
        return this.http.doGet<Matricula>(`/inscripcion-ms/matriculas/${id}`, this.http.optsName('listar matricula por id'));
      }
}

interface Response {
    valor: number;
  }