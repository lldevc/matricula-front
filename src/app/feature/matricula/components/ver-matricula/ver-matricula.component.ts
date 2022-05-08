import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from '../../shared/service/matricula.service';


@Component({
  selector: 'app-ver-matricula',
  templateUrl: './ver-matricula.component.html',
  styleUrls: ['./ver-matricula.component.css']
})
export class VerMatriculaComponent implements OnInit {

  myParam: string;

  constructor(private route: ActivatedRoute, private matriculaService: MatriculaService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.myParam = params['id']);
    console.log(this.myParam);
    this.matriculaService.consultarPorId(this.myParam).subscribe( matricula => {
      console.log(matricula);
    })
  }

}
