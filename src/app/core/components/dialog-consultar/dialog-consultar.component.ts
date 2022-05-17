import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-consultar',
  templateUrl: './dialog-consultar.component.html'
})
export class DialogConsultarComponent  {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
      this.form = this.fb.group({
        id: ['', Validators.required]
      });
    }


  buscar(){
    this.router.navigateByUrl('/matricula', { skipLocationChange: true }).then(() => {
      this.router.navigate(['matricula/ver-matricula', this.form.value.id]);
      });

  }

}
