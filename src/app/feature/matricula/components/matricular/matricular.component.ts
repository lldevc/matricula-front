import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Programa } from 'src/app/feature/programa/shared/model/programa';
import { ProgramaService } from '../../../programa/shared/service/programa.service';



@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  public listaProgramas: Observable<Programa[]>;
  public form: FormGroup;

  constructor(private  fb: FormBuilder, protected programaService: ProgramaService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      email: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      programa: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.consultarProgramas();
  }

  consultarProgramas() {
    this.listaProgramas = this.programaService.consultar();
  }

  matricularme() {
    console.log(this.form)
  }

}
