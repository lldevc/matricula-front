export class UsuarioMatricula {
    id: number;
    numeroIdentificacion: number;
    nombre: string;
    email: string;
    ciudad: string;
    direccion: string;

    constructor(id: number, numeroIdentificacion: number, nombre: string, email: string, ciudad: string, direccion: string) {
        this.id = id;
        this.numeroIdentificacion = numeroIdentificacion;
        this.nombre = nombre;
        this.email = email;
        this.ciudad = ciudad;
        this.direccion = direccion;
    }
}
