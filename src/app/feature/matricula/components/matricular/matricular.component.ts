import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Programa } from 'src/app/feature/programa/shared/model/programa';
import { ProgramaService } from '../../../programa/shared/service/programa.service';
import { MatriculaService } from '../../shared/service/matricula.service';
import { MatriculaCrearRequest } from '../../shared/model/MatriculaCrearRequest';



@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  public listaProgramas: Observable<Programa[]>;
  public form: FormGroup;

  constructor(
    private  fb: FormBuilder, 
    protected programaService: ProgramaService, 
    protected matriculaService: MatriculaService
    ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      email: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      programa: [, Validators.required]
    })
  }

  ngOnInit(): void {
    this.consultarProgramas();
  }

  consultarProgramas() {
    this.listaProgramas = this.programaService.consultar();
  }

  matricularme() {

    let programaDB: Programa = null;
    this.listaProgramas.subscribe(programs => {
      const program = programs.find(program => program.id.toString() === this.form.value.programa)
      console.log(program, this.form.value.programa);
      programaDB = program;
    })

    const usuarioMatricula: Usuario = {
      numeroIdentificacion: this.form.value.numeroIdentificacion,
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      ciudad: this.form.value.ciudad,
      direccion: this.form.value.direccion
    }

    const matriculaCrearRequest: MatriculaCrearRequest = {
      programa: programaDB,
      usuarioMatricula: usuarioMatricula
    }

    console.log(matriculaCrearRequest)
  }


}

interface Usuario {
  numeroIdentificacion: number;
  nombre: string;
  email: string;
  ciudad: string;
  direccion: string;
}