import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatriculaModule } from './feature/matricula/matricula.module';
import { ProgramaModule } from './feature/programa/programa.module';


// Componentes
import { HomeComponent } from '@home/home.component';
import { AppComponent } from './app.component';
import { PerfilComponent } from './feature/usuarioMatricula/components/perfil/perfil.component';
import { UsuarioMatriculaService } from './feature/usuarioMatricula/shared/usuarioMatricula.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    BrowserAnimationsModule,
    MatriculaModule,
    ProgramaModule
  ],
  providers: [CookieService, UsuarioMatriculaService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
