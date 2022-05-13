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

    // elementos usuario componente
    private inputBusvarEstudiante = element(by.id('bucar-estudiante'));

    async ingresarIdentificacionEstudiante(id) {
        await this.inputBusvarEstudiante.sendKeys(id);
    }
    
}