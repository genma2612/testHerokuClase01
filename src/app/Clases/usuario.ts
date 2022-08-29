export class Usuario {
    email:string;
    password:string;

    public constructor(usuario:string, contraseña:string){
        this.email = usuario;
        this.password = contraseña;
    }
}
