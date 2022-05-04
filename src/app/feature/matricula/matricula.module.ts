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

// Componentes
import { MatricularComponent } from './components/matricular/matricular.component';
import { MatriculaService } from './shared/service/matricula.service';

@NgModule({
  declarations: [
    MatricularComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    ProgramaModule
  ],
  exports: [
    MatricularComponent,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [MatriculaService]
})
export class MatriculaModule { }
