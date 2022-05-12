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

  formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "USD" });

  ref;
  valor;
  matricula: Matricula;

  constructor(
    private route: ActivatedRoute, 
    private matriculaService: MatriculaService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.matriculaService.consultarPorId(id).subscribe(matricula => {
        this.matricula = matricula;
        this.ref = matricula.id;
        this.valor = this.formateador.format(matricula.valor);
      },(err: HttpErrorResponse) => {
        console.error(err);
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


    const re = /\s/gi

    const medioDePago: MedioDePago = {
      numeroTarjeta: (<HTMLInputElement>document.getElementById("card")).value.replace(re, ''),
      anioVecimiento: (<HTMLInputElement>document.getElementById("anio")).value,
      mesVecimiento: (<HTMLInputElement>document.getElementById("mes")).value,
      codigoSeguridad: (<HTMLInputElement>document.getElementById("cvv")).value
    }

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
      medioDePago: medioDePago
    };
    this.matriculaService.pagar(matriculaPagarRequest).subscribe(resp =>{
      console.log(resp);
      this.openDialog()
    }, (err: HttpErrorResponse) => {
      console.error(err);
      this._snackBar.open(err.error.mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      })
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onKeyUp(x) {
    let valorInput = x.target.value;

    (<HTMLInputElement>document.getElementById("card"))
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blancl
        .replace(/\D/g, '')        // elimina las lestras
        .replace(/([0-9]{4})/g, '$1 ')  //espacios cada 4 numeros
        .trim();
  }

  onKeyUpMes(x) {
    let valorInput = x.target.value;
    (<HTMLInputElement>document.getElementById("mes"))
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blanco
        .replace(/\D/g, '')        // elimina las lestras 
        .trim();
  }

  onKeyUpAnio(x) {
    let valorInput = x.target.value;
    (<HTMLInputElement>document.getElementById("anio"))
      .value = valorInput.replace(/\s/g, '') // elimina espacios en blanco
        .replace(/\D/g, '')        // elimina las lestras 
        .trim();
  }



}


