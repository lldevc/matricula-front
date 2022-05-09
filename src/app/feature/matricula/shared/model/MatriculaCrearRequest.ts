import { Programa } from '../../../programa/shared/model/programa';

export interface MatriculaCrearRequest {
    programa: Programa;
    usuarioMatricula: RequestUsuarioMatricula;
}

export interface RequestUsuarioMatricula {
    numeroIdentificacion: number;
    nombre: string;
    email: string;
    ciudad: string;
    direccion: string;
}