import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Programa } from 'src/app/feature/programa/shared/model/programa';
import { ProgramaService } from '../../../programa/shared/service/programa.service';
import { MatriculaService } from '../../shared/service/matricula.service';
import { MatriculaCrearRequest, RequestUsuarioMatricula } from '../../shared/model/MatriculaCrearRequest';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  public listaProgramas: Observable<Programa[]>;
  public form: FormGroup;
  hayError: boolean = false;
  loading: boolean = false;
  programas: Programa[];

  constructor(
    private fb: FormBuilder, protected programaService: ProgramaService,
    protected matriculaService: MatriculaService, private _snackBar: MatSnackBar, 
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      email: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      programaId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loading = false;
    this.listaProgramas = this.programaService.consultar();
  }

  async matricularme() {

    this.hayError = false;

    const programs = await this.listaProgramas.toPromise();
    const program = programs.find(program => program.id === this.form.value.programaId)

    const usuarioMatricula: RequestUsuarioMatricula = {
      numeroIdentificacion: this.form.value.numeroIdentificacion,
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      ciudad: this.form.value.ciudad,
      direccion: this.form.value.direccion
    }

    const matriculaCrearRequest: MatriculaCrearRequest = {
      programa: program,
      usuarioMatricula: usuarioMatricula
    }

    this.matriculaService.guardar(matriculaCrearRequest).subscribe(valor =>{
      this.loading = true;
      this.form.reset();
      this.router.navigate(['matricula/ver-matricula', valor.valor]);
    }, (err: HttpErrorResponse) => {
      this.hayError = true;
      console.error(err);
      this._snackBar.open(err.error.mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      })
      this.form.reset();
    }); 
 
  }

}