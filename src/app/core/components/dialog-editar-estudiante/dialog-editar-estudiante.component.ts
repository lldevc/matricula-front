import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioMatricula } from '@usuario-matricula/shared/model/usuarioMatricula';
import { PerfilComponent } from '@usuario-matricula/components/perfil/perfil.component';
import { UsuarioMatriculaService } from '@usuario-matricula/shared/usuarioMatricula.service';

@Component({
  selector: 'app-dialog-editar-estudiante',
  templateUrl: './dialog-editar-estudiante.component.html'
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
    });
  }

  ngOnInit(): void {
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

    this.usuariroMatriuclaService.actualizarDatos(usuario).subscribe(() => {
      this.router.navigateByUrl('/usuario', { skipLocationChange: true }).then(() => {
        this.router.navigate(['usuario/perfil', this.data.numeroIdentificacion]);
        });

    }, (err: HttpErrorResponse) => {
      this._snackBar.open(err.error.mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      });
    });
  }

}
