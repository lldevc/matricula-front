import { NavbarPage } from '../page/navbar/navbar.po';
import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { MatriculaPage } from '../page/matricula/matricula.po';
import { UsuarioMatriculaPage } from '../page/usuarioMatricula/usuarioMatricula.po';
import { DialogPage } from '../page/dialog/dialog.po';

describe('workspace-project Matricula', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let matricula: MatriculaPage;
    let usuarioMatricula: UsuarioMatriculaPage;
    let dialogOpen: DialogPage;

    beforeEach(() => {
        page = new AppPage();
        matricula = new MatriculaPage();
        usuarioMatricula = new UsuarioMatriculaPage();
        navBar = new NavbarPage();
        dialogOpen = new DialogPage();
    });

    it('Deberia matricular validar que el usuario se matriculo y consultar el estado de su matricula', async () => {
        const NOMBRE = 'JHON DOE';
        const NUMERO_IDENTIFIACION = Math.floor(Math.random() * (999999999 + 1));
        const EMAUL = 'jhon@test.com';
        const CIUDAD = 'City Test';
        const DIRECCION = 'CLL 1 #1-11 test direccion';
        const ESTADO_MATRICULA = 'PENDIENTE';

        await matricula.ingresarNombre(NOMBRE);
        await matricula.ingresarIdentificacion(NUMERO_IDENTIFIACION);
        await matricula.ingresarEmail(EMAUL);
        await matricula.ingresarCiudad(CIUDAD);
        await matricula.ingresarDirecccion(DIRECCION);
        await matricula.clickSelectMatricula();
        await matricula.clickOpcionIngles();
        await matricula.clickBotonMatricular();
        await browser.waitForAngular();

        await navBar.clickBotonMatriculado();
        await browser.waitForAngular();
        await expect(page.getTextOfElement('.titulo-buscar-estudiante')).toEqual('Buscar estudiante');
        await dialogOpen.ingresarIdentificacionEstudiante(NUMERO_IDENTIFIACION);
        await dialogOpen.clickBotonConsultaEstudiante();
        await browser.waitForAngular();

        await expect(page.getTextOfElementById('nombre-usuario')).toEqual(NOMBRE);
        await browser.waitForAngular();

        await usuarioMatricula.clickBotonIrAMatricula();
        await browser.waitForAngular();
        await expect(page.getTextOfElementById('estado-matricula')).toEqual(ESTADO_MATRICULA);

    });

    it('Deberia ir a pago de matricula y pagar la matricula', async () => {
        const ID_MATRICULA = 1003;
        const ESTADO_MATRICULA = 'PAGADA';

        await navBar.clickBotonPagos();
        await dialogOpen.ingresarIdMatriculaParaPago(ID_MATRICULA);
        await expect(page.getTextOfElement('.titulo-dialog-pagar')).toEqual('Pagar matricula');
        await dialogOpen.clickBotonConsultaPagoMatricula();
        await browser.waitForAngular();

        await expect(page.getTextOfElementById('referencia')).toEqual(`ref: ${ID_MATRICULA}`);
        await matricula.IngresarNumeroDeTarjeta('1111222233334444');
        await matricula.IngresarMesDeTarjeta('11');
        await matricula.IngresarAnioDeTarjeta('2050');
        await matricula.IngresarCvvDeTarjeta('111');
        await matricula.clickBotonPagar();
        await browser.waitForAngular();

        await dialogOpen.clickBotonPagoExitoso();
        await browser.waitForAngular();

        await navBar.clickBotonConsulta();
        await expect(page.getTextOfElementById('titulo')).toEqual('Consultar matricula');
        await dialogOpen.ingresarIdMatriculaParaConsulta(ID_MATRICULA);
        await dialogOpen.clickBotonConsultaMatricula();
        await browser.waitForAngular();

        await expect(page.getTextOfElementById('estado-matricula')).toEqual(ESTADO_MATRICULA);

    });
});
