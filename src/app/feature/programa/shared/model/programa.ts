export class Programa {
    id: number;
    nombre: string;
    precio: number;
    recargo: number;
    diasParaRecargo: number;

    constructor(id: number, nombre: string, precio: number, recargo: number, diasParaRecargo: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.recargo = recargo;
        this.diasParaRecargo = diasParaRecargo;
    }
}