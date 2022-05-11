import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioMatriculaService } from './shared/usuarioMatricula.service';
import { UsuarioMatriculaRoutingModule } from './usuario-matricula-routing.module';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioMatriculaRoutingModule
  ],
  exports:[
    PerfilComponent
  ],
  providers: [UsuarioMatriculaService]
})
export class UsuarioMatriculaModule { }
