export interface MatriculaPagarRequest {
    id: number;
    programa: Programa;
    valor: number;
    usuarioMatricula: UsuarioMatricula;
    recargo: boolean;
    estadoDePago: string;
    fechaCreacion: Date;
    fechaLimitePagoSinRecargo: Date;
    fechaMaximaPago: Date;
    medioDePago: MedioDePago;
}

export interface MedioDePago {
    numeroTarjeta: string;
    anioVecimiento: string;
    mesVecimiento: string;
    codigoSeguridad: string;
}

interface Programa {
    id: number;
    nombre: string;
    precio: number;
    recargo: number;
    diasParaRecargo: number;
}

interface UsuarioMatricula {
    id: number;
    numeroIdentificacion: number;
    nombre: string;
    email: string;
    ciudad: string;
    direccion: string;
}
