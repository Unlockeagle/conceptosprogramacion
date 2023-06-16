export enum profesion {
    profesor,
    estudiante,
    diseñador,
    artista,
    conductor,
}

type Tprofesion = 'profesor' | 'estudiante' | 'diseñador' | 'artista' | 'conductor'


class Persona {

    public nombre: string ;
    public apellido: string;
    public edad: number;
    public profesion: Tprofesion;
    private sueldo: number;

    constructor (edad: number, nombre: string, apellido: string, profesion: Tprofesion, sueldo: number) {

        this.edad = edad
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.profesion = profesion
        this.sueldo = sueldo

    }


    getSueldo () : number {
        return this.sueldo
    }
    
    setSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo
    }
}
export default Persona 