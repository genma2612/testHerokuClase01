import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import Swal from 'sweetalert2'


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

  firebaseErrors:any = {
    'auth/email-already-in-use': 'El correo ingresado ya se encuentra registrado',
    'auth/invalid-email': 'El correo ingresado no tiene el formato correcto',
    'auth/wrong-password': 'Contraseña incorrecta'
  };

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(public authService: AuthService, public router: Router) {

   }

   registrar(email:string, pass:string){
    this.authService.SignUp(email,pass)
    .then(() => {
      this.Toast.fire({
        icon: 'success',
        title: "Usuario registrado correctamente"
      });
      this.router.navigate(['/bienvenida']);
      })
    .catch((x)=> { 
      this.Toast.fire({
        icon: 'error',
        title: this.firebaseErrors[x.code] || x.code
      });
    }
      );
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
