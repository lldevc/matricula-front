import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from '../../../matricula/shared/service/matricula.service';
import { DialogEditarEstudianteComponent } from '../../../../core/components/dialog-editar-estudiante/dialog-editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.matriculaService.consultarPorIdentificacionDeUsuario(id).subscribe(matriculas => {
        console.log(matriculas)
        if (matriculas.length > 0) {
          this.listaMatriculas = matriculas;
          this.id = matriculas[0].usuarioMatricula.id;
          this.nombre = matriculas[0].usuarioMatricula.nombre;
          this.identificacion = matriculas[0].usuarioMatricula.numeroIdentificacion;
          this.email = matriculas[0].usuarioMatricula.email;
          this.ciudad = matriculas[0].usuarioMatricula.ciudad;
          this.direccion = matriculas[0].usuarioMatricula.direccion;
          this.nombrePrograma = matriculas[0].programa.nombre;
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
