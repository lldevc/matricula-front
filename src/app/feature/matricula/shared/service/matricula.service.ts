import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { MatriculaCrearRequest } from "../model/MatriculaCrearRequest"

@Injectable()
export class MatriculaService {

    constructor(protected http: HttpService) {}

    public guardar(matricularCrearRequest: MatriculaCrearRequest) {
        console.log('guardar -->', matricularCrearRequest)
        return this.http.doPost<MatriculaCrearRequest, Response>('/inscripcion-ms/matriculas', matricularCrearRequest,
                                                    this.http.optsName('crear/actualizar matricula'));
      }
}

interface Response {
    valor: number;
  }