import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Programa } from '../model/programa';

@Injectable()
export class ProgramaService {

    constructor(protected http: HttpService) {}

    public consultar() {
        return this.http.doGet<Programa[]>('/inscripcion-ms/programas', this.http.optsName('consultar progrmas'));
    }
}
