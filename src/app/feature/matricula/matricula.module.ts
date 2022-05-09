import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramaModule } from './../programa/programa.module';

// Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

// Componentes
import { MatricularComponent } from './components/matricular/matricular.component';
import { MatriculaService } from './shared/service/matricula.service';
import { VerMatriculaComponent } from './components/ver-matricula/ver-matricula.component';
import { PagarMatriculaComponent } from './components/pagar-matricula/pagar-matricula.component';
import { ConsultarMatriculaComponent } from './components/consultar-matricula/consultar-matricula.component';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './components/matricula/matricula.component';

@NgModule({
  declarations: [
    MatricularComponent,
    VerMatriculaComponent,
    PagarMatriculaComponent,
    ConsultarMatriculaComponent,
    MatriculaComponent
  ],
  imports: [
    MatriculaRoutingModule,
    CommonModule,
    ProgramaModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatricularComponent,
    VerMatriculaComponent,
    PagarMatriculaComponent,
    ConsultarMatriculaComponent,
    MatriculaComponent,
    CommonModule,
    ProgramaModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [MatriculaService]
})
export class MatriculaModule { }
