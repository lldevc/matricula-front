import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilComponent } from '../../../feature/usuarioMatricula/components/perfil/perfil.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioMatricula } from '../../../feature/usuarioMatricula/shared/model/usuarioMatricula';
import { UsuarioMatriculaService } from 'src/app/feature/usuarioMatricula/shared/usuarioMatricula.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

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
    @Inject(MAT_DIALOG_DATA) public data: UsuarioMatricula,
    private usuariroMatriuclaService: UsuarioMatriculaService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nombre: [data.nombre, Validators.required],
      email: [data.email, Validators.required],
      ciudad: [data.ciudad, Validators.required],
      direccion: [data.direccion, Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  actualizar() {
    const usuario = new UsuarioMatricula(
      this.data.id,
      this.data.numeroIdentificacion,
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.ciudad,
      this.form.value.direccion
    );
    console.log(usuario);

    this.usuariroMatriuclaService.actualizarDatos(usuario).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['usuario', this.data.numeroIdentificacion]);
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this._snackBar.open(err.error.mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      })
    });
  }

}
