import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  mail="";
  clave="";
  copiaClave="";
  listadoDeUsuarios:any[]=[];

  constructor(public authService: AuthService) {

   }


  /*
  constructor(public authService: AuthService) {
    let datosGuardados;
    datosGuardados=localStorage.getItem("listadoDeUsuarios");
    if(datosGuardados!=null)
    {
      this.listadoDeUsuarios = JSON.parse(datosGuardados);
    }
    console.info("datos traidos: ",datosGuardados);
   }

   registrar()
   {
     console.log("registrando");
 
     if(this.clave==this.copiaClave)
     {
       let usuarioNuevo={nombre:this.nombre, clave:this.clave};
 
       this.listadoDeUsuarios.push(usuarioNuevo);
 
       this.guardar();
       console.log("Registrado exitosamente");
 
     }
   }
   guardar()
   {
       localStorage.setItem("listadoDeUsuarios",JSON.stringify(this.listadoDeUsuarios));
   }
   */
  ngOnInit(): void {
  }

}
