import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from '../../shared/service/matricula.service';
import { MatriculaPagarRequest, MedioDePago } from '../../shared/model/MatriculaPagarRequest';
import { Matricula } from '../../shared/model/Matricula';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../core/components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-pagar-matricula',
  templateUrl: './pagar-matricula.component.html',
  styleUrls: ['./pagar-matricula.component.css']
})
export class PagarMatriculaComponent implements OnInit {

  formateador = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' });

  ref;
  valor;
  matricula: Matricula;
  idUrl: string;

  constructor(
    private route: ActivatedRoute,
    private matriculaService: MatriculaService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.idUrl = id;
      this.matriculaService.consultarPorId(this.idUrl).subscribe(matricula => {
        this.matricula = matricula;
        this.ref = matricula.id;
        this.valor = this.formateador.format(matricula.valor);
      }, () => {
        this._snackBar.open('Matricula no encontrada!!', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 6000
        });
        this.router.navigate(['home']);
      });

    });
  }

  pagar() {


    const re = /\s/gi;

    const medioDePago: MedioDePago = {
      numeroTarjeta: (document.getElementById('card') as HTMLInputElement).value.replace(re, ''),
      anioVecimiento: (document.getElementById('anio') as HTMLInputElement).value,
      mesVecimiento: (document.getElementById('mes') as HTMLInputElement).value,
      codigoSeguridad: (document.getElementById('cvv') as HTMLInputElement).value
    };

    const matriculaPagarRequest: MatriculaPagarRequest = {
      id: this.matricula.id,
      programa: this.matricula.programa,
      valor: this.matricula.valor,
      usuarioMatricula: this.matricula.usuarioMatricula,
      recargo: this.matricula.recargo,
      estadoDePago: this.matricula.estadoDePago,
      fechaCreacion: this.matricula.fechaCreacion,
      fechaLimitePagoSinRecargo: this.matricula.fechaLimitePagoSinRecargo,
      fechaMaximaPago: this.matricula.fechaMaximaPago,
      medioDePago
    };
    this.matriculaService.pagar(matriculaPagarRequest).subscribe(() => {
      this.openDialog();
    }, (err: HttpErrorResponse) => {
      this._snackBar.open(err.error.mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe();
  }

  onKeyUp(x) {
    const valorInput = x.target.value;

    (document.getElementById('card') as HTMLInputElement)
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blancl
        .replace(/\D/g, '')        // elimina las lestras
        .replace(/([0-9]{4})/g, '$1 ')  // espacios cada 4 numeros
        .trim();
  }

  onKeyUpMes(x) {
    const valorInput = x.target.value;
    (document.getElementById('mes') as HTMLInputElement)
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blanco
        .replace(/\D/g, '')        // elimina las lestras
        .trim();
  }

  onKeyUpAnio(x) {
    const valorInput = x.target.value;
    (document.getElementById('anio') as HTMLInputElement)
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blanco
        .replace(/\D/g, '')        // elimina las lestras
        .trim();
  }



}


