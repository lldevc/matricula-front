import { by, element } from 'protractor';

export class NavbarPage {
    linkInicio = element(by.id('enlace-inicio'));
    linkPopPagos = element(by.id('enlace-pagos'));
    linkPopConsular = element(by.id('enlace-consultar'));
    btnPopMatriculado = element(by.id('btn-matriculado'));

    async clickBotonInicio() {
        await this.linkInicio.click();
    }

    async clickBotonPagos() {
        await this.linkPopPagos.click();
    }

    async clickBotonConsulta() {
        await this.linkPopConsular.click();
    }

    async clickBotonMatriculado() {
        await this.btnPopMatriculado.click();
    }
}
