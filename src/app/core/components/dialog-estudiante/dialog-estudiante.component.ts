import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-estudiante',
  templateUrl: './dialog-estudiante.component.html',
  styleUrls: ['./dialog-estudiante.component.css']
})
export class DialogEstudianteComponent implements OnInit {

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
    this.router.navigateByUrl('/usuario', { skipLocationChange: true }).then(() => {
      this.router.navigate(['usuario/perfil', this.form.value.id]);
      });
    
  }

}
