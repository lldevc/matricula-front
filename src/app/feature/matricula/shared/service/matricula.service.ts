import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { MatriculaCrearRequest } from "../model/MatriculaCrearRequest"

@Injectable()
export class MatriculaService {

    constructor(protected http: HttpService) {}

    public guardar(matricularCrearRequest: MatriculaCrearRequest) {
        return this.http.doPost<MatriculaCrearRequest, boolean>('localhost:8090/inscripcion-ms/matriculas', matricularCrearRequest,
                                                    this.http.optsName('crear/actualizar matricula'));
      }
}