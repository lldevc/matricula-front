import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from '../../shared/service/matricula.service';


@Component({
  selector: 'app-ver-matricula',
  templateUrl: './ver-matricula.component.html',
  styleUrls: ['./ver-matricula.component.css']
})
export class VerMatriculaComponent implements OnInit {

  formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "USD" });

  valorMatricula;
  myParam: string;
  nombreUsuario: string = 'Empty';
  identificacion: number = null;
  fechaSinRecargo: string;
  fechaLimite: string;
  nombrePrograma: string = 'Empty';
  estadoMatricula: string = 'Empty';

  constructor(private route: ActivatedRoute, private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.myParam = params['id']);
    console.log(this.myParam);
    this.matriculaService.consultarPorId(this.myParam).subscribe(matricula => {
      console.log(matricula);
      this.valorMatricula = this.formateador.format(matricula.valor);
      this.nombreUsuario = matricula.usuarioMatricula.nombre;
      this.identificacion = matricula.usuarioMatricula.numeroIdentificacion;
      this.fechaSinRecargo = matricula.fechaLimitePagoSinRecargo.toLocaleString().split(' ')[0] ;
      this.fechaLimite = matricula.fechaMaximaPago.toLocaleString().split(' ')[0];
      this.nombrePrograma = matricula.programa.nombre;
      this.estadoMatricula = matricula.estadoDePago;
    })
  }

}
