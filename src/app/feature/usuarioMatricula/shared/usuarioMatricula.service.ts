import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioMatricula } from './model/usuarioMatricula';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMatriculaService {

  private _refresh$ = new Subject<void>();

  constructor(protected httpClient: HttpClient) { }

  get refresh(){
    return this._refresh$;
  }

  public actualizarDatos(usuairio: UsuarioMatricula) {
    return this.httpClient.put<UsuarioMatricula>(`/inscripcion-ms/usuarios-matricula/${usuairio.id}`, usuairio)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }
}
