import { NavbarPage } from '../page/navbar/navbar.po';
import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { MatriculaPage } from '../page/matricula/matricula.po';
import { UsuarioMatriculaPage } from '../page/usuarioMatricula/usuarioMatricula.po';

describe('workspace-project Matricula', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let matricula: MatriculaPage;
    let usuarioMatricula : UsuarioMatriculaPage;

    beforeEach(() => {
        page = new AppPage();
        matricula = new MatriculaPage();
        navBar = new NavbarPage();
        usuarioMatricula = new UsuarioMatriculaPage();
    });

    it('Deberia matricular validar que el usuario se matriculo y consultar el estado de su matricula', async () => {
        const NOMBRE = 'JHON DOE';
        const NUMERO_IDENTIFIACION = Math.floor(Math.random() * (999999999 + 1));;
        const EMAUL = 'jhon@test.com';
        const CIUDAD = 'City Test';
        const DIRECCION = 'CLL 1 #1-11 test direccion';
        const ESTADO_MATRICULA = 'PENDIENTE';

        await page.navigateTo('/');
        await matricula.ingresarNombre(NOMBRE);
        await matricula.ingresarIdentificacion(NUMERO_IDENTIFIACION);
        await matricula.ingresarEmail(EMAUL);
        await matricula.ingresarCiudad(CIUDAD);
        await matricula.ingresarDirecccion(DIRECCION);
        await matricula.clickSelectMatricula()
        await matricula.clickOpcionIngles()
        await matricula.clickBotonMatricular();
        await browser.waitForAngular();
        
        await navBar.clickBotonMatriculado();
        await browser.waitForAngular();
        await expect(page.getTextOfElement('.titulo-buscar-estudiante')).toEqual('Buscar estudiante');
        await matricula.ingresarIdentificacionEstudiante(NUMERO_IDENTIFIACION);
        await page.navigateTo(`/usuario/perfil/${NUMERO_IDENTIFIACION}`);

        await expect(page.getTextOfElementById('nombre-usuario')).toEqual(NOMBRE);
        await usuarioMatricula.clickBotonIrAMatricula();
        await expect(page.getTextOfElementById('estado-matricula')).toEqual(ESTADO_MATRICULA);
    });
});
