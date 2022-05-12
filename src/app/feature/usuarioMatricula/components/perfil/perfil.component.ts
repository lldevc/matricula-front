import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from '../../../matricula/shared/service/matricula.service';
import { DialogEditarEstudianteComponent } from '../../../../core/components/dialog-editar-estudiante/dialog-editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id;
  nombre;
  identificacion;
  email;
  ciudad;
  direccion;
  nombrePrograma;
  listaMatriculas;

  idUrl: string;

  constructor(
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.idUrl = id;
      this.matriculaService.consultarPorIdentificacionDeUsuario(this.idUrl).subscribe(matriculas => {
        if (matriculas.length > 0) {
          this.listaMatriculas = matriculas;
          this.id = matriculas[0].usuarioMatricula.id;
          this.nombre = matriculas[0].usuarioMatricula.nombre;
          this.identificacion = matriculas[0].usuarioMatricula.numeroIdentificacion;
          this.email = matriculas[0].usuarioMatricula.email;
          this.ciudad = matriculas[0].usuarioMatricula.ciudad;
          this.direccion = matriculas[0].usuarioMatricula.direccion;
          this.nombrePrograma = matriculas[0].programa.nombre;
        } else {
            this._snackBar.open(`Al usuario con numero de identificacion ${id}, no cuenta con ninguna matricula en el sistema`, '', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
              duration: 6000
            });
            this.router.navigate(['home']);
          
        }
      });
    });
  }

  openDialogEditarEstudiante(): void {
    const dialogRef = this.dialog.open(DialogEditarEstudianteComponent,{
      data: {id: this.id, numeroIdentificacion: this.identificacion, nombre: this.nombre, email: this.email, ciudad: this.ciudad, direccion: this.direccion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
