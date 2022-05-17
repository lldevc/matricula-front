import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'perfil/:id',
        component: PerfilComponent
      }
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
export class UsuarioMatriculaRoutingModule { }
