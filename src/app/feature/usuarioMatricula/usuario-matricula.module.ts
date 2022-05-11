import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioMatriculaService } from './shared/usuarioMatricula.service';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PerfilComponent
  ],
  providers: [UsuarioMatriculaService]
})
export class UsuarioMatriculaModule { }
