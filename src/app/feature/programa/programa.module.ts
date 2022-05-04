import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaComponent } from './components/programa/programa.component';
import { ProgramaService } from './shared/service/programa.service';


@NgModule({
  declarations: [
    ProgramaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgramaComponent
  ],
  providers: [ProgramaService]
})
export class ProgramaModule { }
