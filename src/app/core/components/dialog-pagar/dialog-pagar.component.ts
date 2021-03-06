import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-pagar',
  templateUrl: './dialog-pagar.component.html'
})
export class DialogPagarComponent implements OnInit {


  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
      this.form = this.fb.group({
        id: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  pagar(){
    this.router.navigateByUrl('/matricula', { skipLocationChange: true }).then(() => {
      this.router.navigate(['matricula/pagar-matricula', this.form.value.id]);
      });


  }

}
