import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Programa } from 'src/app/feature/programa/shared/model/programa';
import { ProgramaService } from '../../../programa/shared/service/programa.service';
import { MatriculaService } from '../../shared/service/matricula.service';
import { MatriculaCrearRequest } from '../../shared/model/MatriculaCrearRequest';



interface Usuario {
  numeroIdentificacion: number;
  nombre: string;
  email: string;
  ciudad: string;
  direccion: string;
}

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  public listaProgramas: Observable<Programa[]>;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected programaService: ProgramaService,
    protected matriculaService: MatriculaService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      email: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      programaId: [, Validators.required]
    })
  }

  ngOnInit(): void {
    this.listaProgramas = this.programaService.consultar();
  }

  async matricularme() {

    const programs = await this.listaProgramas.toPromise();
    const program = programs.find(program => program.id === this.form.value.programaId)

    const usuarioMatricula: Usuario = {
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

    const id =  this.matriculaService.guardar(matriculaCrearRequest);
    
    id.subscribe(valor =>{
      console.log('id -> ', valor);
    }) 
 
  }

}