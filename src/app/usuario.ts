export class Usuario {
    public nombre! : string;
    private clave! : string;

    constructor(nombre:string, clave:string){
        this.nombre = nombre;
        this.clave = clave
    }
 
    public set Clave(clave : string) {
        this.clave = clave;
    }
    
    public get Clave() : string {
        return this.clave;
    }
    
}
