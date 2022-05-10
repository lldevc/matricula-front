import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { MatricularComponent } from './feature/matricula/components/matricular/matricular.component';
import { PerfilComponent } from './feature/usuarioMatricula/components/perfil/perfil.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MatricularComponent, canActivate: [SecurityGuard]  },
  { path: 'matricula', loadChildren: () => import('./feature/matricula/matricula.module').then(mod => mod.MatriculaModule) },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'usuario', component: PerfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
