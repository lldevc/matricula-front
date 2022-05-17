import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatricularComponent } from './components/crear-matricula/matricular.component';
import { VerMatriculaComponent } from './components/ver-matricula/ver-matricula.component';
import { PagarMatriculaComponent } from './components/pagar-matricula/pagar-matricula.component';
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
        path: 'ver-matricula/:id',
        component: VerMatriculaComponent
      },
      {
        path: 'pagar-matricula/:id',
        component: PagarMatriculaComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
