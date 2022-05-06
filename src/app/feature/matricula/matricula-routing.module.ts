import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatricularComponent } from './components/matricular/matricular.component';
import { VerMatriculaComponent } from './components/ver-matricula/ver-matricula.component';
import { PagarMatriculaComponent } from './components/pagar-matricula/pagar-matricula.component';
import { ConsultarMatriculaComponent } from './components/consultar-matricula/consultar-matricula.component';
import { MatriculaComponent } from './components/matricula/matricula.component';


const routes: Routes = [
  {
    path: '',
    component: MatriculaComponent,
    children: [
      {
        path: 'crear-matricula',
        component: MatricularComponent
      },
      {
        path: 'ver-matricula',
        component: VerMatriculaComponent
      },
      {
        path: 'pagar-matricula',
        component: PagarMatriculaComponent
      },
      {
        path: 'consular-matricula',
        component: ConsultarMatriculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
