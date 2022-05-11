import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityGuard } from './guard/security.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token-interceptor';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

// componentes
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { DialogComponent } from '@core/components/dialog/dialog.component';
import { DialogPagarComponent } from '@core/components/dialog-pagar/dialog-pagar.component'
import { DialogConsultarComponent } from '@core/components/dialog-consultar/dialog-consultar.component';
import { DialogEstudianteComponent } from '@core/components/dialog-estudiante/dialog-estudiante.component';
import { DialogEditarEstudianteComponent } from '@core/components/dialog-editar-estudiante/dialog-editar-estudiante.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    DialogComponent, 
    DialogPagarComponent, 
    DialogConsultarComponent, 
    DialogEstudianteComponent, 
    DialogEditarEstudianteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent,
    DialogComponent, 
    DialogPagarComponent, 
    DialogConsultarComponent, 
    DialogEstudianteComponent, 
    DialogEditarEstudianteComponent
  ],
  providers: [
    HttpService,
    SecurityGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }
