import { Programa } from 'src/app/feature/programa/shared/model/programa';
import { UsuarioMatricula } from '../../../usuarioMatricula/shared/model/usuarioMatricula';
export class Matricula {
    id: number;
    valor: number;
    recargo: boolean;
    estadoDePago: string;
    fechaCreacion: Date;
    fechaLimitePagoSinRecargo: Date;
    fechaMaximaPago: Date;
    programa: Programa;
    usuarioMatricula: UsuarioMatricula;

    constructor(id: number, valor: number, recargo: boolean, estadoDePago: string, fechaCreacion: Date,
                fechaLimitePagoSinRecargo: Date, fechaMaximaPago: Date, programa: Programa, usuarioMatricula: UsuarioMatricula
        ) {

        this.id = id;
        this.valor = valor;
        this.recargo = recargo;
        this.estadoDePago = estadoDePago;
        this.fechaCreacion = fechaCreacion;
        this.fechaLimitePagoSinRecargo = fechaLimitePagoSinRecargo;
        this.fechaMaximaPago = fechaMaximaPago;
        this.programa = programa;
        this.usuarioMatricula = usuarioMatricula;

    }
}
