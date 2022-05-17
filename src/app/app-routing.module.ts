import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { MatricularComponent } from './feature/matricula/components/crear-matricula/matricular.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MatricularComponent, canActivate: [SecurityGuard]  },
  { path: 'matricula', loadChildren: () => import('./feature/matricula/matricula.module').then(mod => mod.MatriculaModule) },
  { path: 'usuario', loadChildren: () => import('./feature/usuarioMatricula/usuario-matricula.module').then(mod => mod.UsuarioMatriculaModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
