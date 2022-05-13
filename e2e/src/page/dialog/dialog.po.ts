import { by, element } from 'protractor';

export class DialogPage {
    private botonDialogConsultarMatricula = element(by.id('btn-consultar-matricula'));
    private inputDialogConsultarMatricula = element(by.id('consultar-matricula'));
    async clickBotonConsultaMatricula() {
        await this.botonDialogConsultarMatricula.click();
    }
    async ingresarIdMatriculaParaConsulta(id) {
        await this.inputDialogConsultarMatricula.sendKeys(id);
    }
    
    private inputDialogConsultaEstudiante = element(by.id('buscar-estudiante'));
    private botonDialogConsultarEstudianteMatricula = element(by.id('btn-buscar-estudiante'));
    async ingresarIdentificacionEstudiante(id) {
        await this.inputDialogConsultaEstudiante.sendKeys(id);
    }
    async clickBotonConsultaEstudiante() {
        await this.botonDialogConsultarEstudianteMatricula.click();
    }

    private botonDialogPagoMatricula = element(by.id('btn-consulta-pago'));
    private inputDialogPago = element(by.id('input-consulta-pago'));
    async clickBotonConsultaPagoMatricula() {
        await this.botonDialogPagoMatricula.click();
    }
    async ingresarIdMatriculaParaPago(id) {
        await this.inputDialogPago.sendKeys(id);
    }


    private botonPagoExitoso = element(by.id('btn'));
    async clickBotonPagoExitoso() {
        await this.botonPagoExitoso.click();
    }

    
}