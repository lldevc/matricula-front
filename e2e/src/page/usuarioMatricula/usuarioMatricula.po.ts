import {by, element } from 'protractor';

export class UsuarioMatriculaPage {
    private btnIrMatricula = element(by.id('ir-matricula'));

    async clickBotonIrAMatricula() {
        await this.btnIrMatricula.click();
    }
}