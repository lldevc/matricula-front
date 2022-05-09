import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-consultar',
  templateUrl: './dialog-consultar.component.html',
  styleUrls: ['./dialog-consultar.component.css']
})
export class DialogConsultarComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
    ) {
      this.form = this.fb.group({
        id: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  buscar(){
    this.router.navigate(['matricula/ver-matricula', this.form.value.id]);
  }

}
