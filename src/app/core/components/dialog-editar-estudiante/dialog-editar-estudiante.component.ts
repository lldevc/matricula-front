import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilComponent } from '../../../feature/usuarioMatricula/components/perfil/perfil.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


interface DialogData {
  nombre: string;
  email: string;
  ciudad: string;
  direccion: string;
}


@Component({
  selector: 'app-dialog-editar-estudiante',
  templateUrl: './dialog-editar-estudiante.component.html',
  styleUrls: ['./dialog-editar-estudiante.component.css']
})
export class DialogEditarEstudianteComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    public dialogRef: MatDialogRef<PerfilComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      this.form = this.fb.group({
        nombre: [data.nombre, Validators.required],
        email: [data.email, Validators.required],
        ciudad: [data.ciudad, Validators.required],
        direccion: [data.direccion, Validators.required],
      })
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  actualizar(){
    this.router.navigate(['usuario', this.form.value.id]);
  }


}
