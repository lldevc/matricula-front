import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { ProgramaModule } from './../programa/programa.module';

// Componentes
import { MatricularComponent } from './components/matricular/matricular.component';
import { VerMatriculaComponent } from './components/ver-matricula/ver-matricula.component';
import { PagarMatriculaComponent } from './components/pagar-matricula/pagar-matricula.component';
import { MatriculaComponent } from './components/matricula/matricula.component';

// Service
import { MatriculaService } from './shared/service/matricula.service';

@NgModule({
  declarations: [
    MatricularComponent,
    VerMatriculaComponent,
    PagarMatriculaComponent,
    MatriculaComponent
  ],
  imports: [
    MatriculaRoutingModule,
    CommonModule,
    ProgramaModule,
    ReactiveFormsModule,
    SharedModule 
  ],
  exports: [
    MatricularComponent,
    VerMatriculaComponent,
    PagarMatriculaComponent,
    MatriculaComponent,
    ReactiveFormsModule,
    ProgramaModule,
  ],
  providers: [MatriculaService]
})
export class MatriculaModule { }
