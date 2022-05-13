import { by, element } from 'protractor';

export class MatriculaPage {
    // elementos de componente matricular
    private inputMatricularNombre = element(by.id('input-form-matricular-nombre'));
    private inputMatricularIdentificacion = element(by.id('input-form-matricular-identificacion'));
    private inputMatricularEmail = element(by.id('input-form-matricular-email'));
    private inputMatricularCiudad = element(by.id('input-form-matricular-ciudad'));
    private inputMatricularDireccion = element(by.id('input-form-matricular-direccion'));
    private selectMatricular = element(by.id('input-form-matricular-programa'));
    private opcionIngles = element(by.id('mat-option-0'));
    private btnMatricular = element(by.id('matricular'));
    
    async ingresarNombre(nombre) {
        await this.inputMatricularNombre.sendKeys(nombre);
    }
    
    async ingresarIdentificacion(identificacion: number) {
        await this.inputMatricularIdentificacion.sendKeys(identificacion);
    }
    
    async ingresarEmail(email) {
        await this.inputMatricularEmail.sendKeys(email);
    }
    
    async ingresarCiudad(ciudad) {
        await this.inputMatricularCiudad.sendKeys(ciudad);
    }
    
    async ingresarDirecccion(direccion) {
        await this.inputMatricularDireccion.sendKeys(direccion);
    }
    
    async clickBotonMatricular() {
        await this.btnMatricular.click();
    }
    
    async clickSelectMatricula() {
        await this.selectMatricular.click();
    }
    
    async clickOpcionIngles() {
        await this.opcionIngles.click();
    }
    
    // elementos consultar matricula componente
    private inputConsultarMatricula = element(by.id('consultar-matricula'));

    async ingresarIdMatricula(id) {
        await this.inputConsultarMatricula.sendKeys(id);
    }

    // componente ver-matricula
    private botonPagar = element(by.id('pagar'));

    async clickBotonIrAPagar() {
        await this.botonPagar.click();
    }

    //componente pagar-matricula
    private botonPagarMatricuala = element(by.id('btn-pagar'))
    private inputNumeroTarjeta = element(by.id('card'));
    private inputMestarjeta = element(by.id('mes'));
    private inputAnioTarjeta = element(by.id('anio'));
    private inputCvvTarjeta = element(by.id('cvv'));

    async clickBotonPagar() {
        await this.botonPagarMatricuala.click();
    }

    async IngresarNumeroDeTarjeta(numero) {
        await this.inputNumeroTarjeta.sendKeys(numero);
    }

    async IngresarMesDeTarjeta(mes) {
        await this.inputMestarjeta.sendKeys(mes);
    }

    async IngresarAnioDeTarjeta(anio) {
        await this.inputAnioTarjeta.sendKeys(anio);
    }

    async IngresarCvvDeTarjeta(cvv) {
        await this.inputCvvTarjeta.sendKeys(cvv);
    }
    
}