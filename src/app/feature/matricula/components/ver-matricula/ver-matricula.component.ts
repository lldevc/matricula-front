import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from '../../shared/service/matricula.service';


@Component({
  selector: 'app-ver-matricula',
  templateUrl: './ver-matricula.component.html',
  styleUrls: ['./ver-matricula.component.css']
})
export class VerMatriculaComponent implements OnInit {

  formateador = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' });

  valorMatricula;
  idUrl: string;
  nombreUsuario = 'Empty';
  identificacion: number = null;
  fechaSinRecargo: string;
  fechaLimite: string;
  nombrePrograma = 'Empty';
  estadoMatricula = 'Empty';

  constructor(
    private route: ActivatedRoute,
    private matriculaService: MatriculaService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.idUrl = params.id);
    this.matriculaService.consultarPorId(this.idUrl).subscribe(matricula => {
      this.valorMatricula = this.formateador.format(matricula.valor);
      this.nombreUsuario = matricula.usuarioMatricula.nombre;
      this.identificacion = matricula.usuarioMatricula.numeroIdentificacion;
      this.fechaSinRecargo = matricula.fechaLimitePagoSinRecargo.toLocaleString().split(' ')[0] ;
      this.fechaLimite = matricula.fechaMaximaPago.toLocaleString().split(' ')[0];
      this.nombrePrograma = matricula.programa.nombre;
      this.estadoMatricula = matricula.estadoDePago;
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this._snackBar.open('Matricula no encontrada!!', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 6000
      });
      this.router.navigate(['home']);
    });
  }

  pagar(){
    this.router.navigate(['matricula/pagar-matricula', this.idUrl]);
  }

}
