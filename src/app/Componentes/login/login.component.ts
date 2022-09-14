import { User } from './../../Servicios/user';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterLinkWithHref } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { delay } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import Swal from 'sweetalert2'
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosDePrueba = [{email:"manuel.gonzalez@sarasa.com",pass:"123456"},
                      {email:"raul.gonzalez@sarasa.com",pass:"123456"},
                      {email:"felipe.gonzalez@sarasa.com",pass:"123456"}];

  firebaseErrors:any = {
    'auth/user-not-found': 'No se encuentra el email',
    'auth/invalid-email': 'El correo ingresado no tiene el formato correcto',
    'auth/wrong-password': 'Contraseña incorrecta'
  }; // list of firebase error codes to alternate error messages

  constructor(public authService: AuthService, public router: Router, public fs: AngularFirestore){

  }

  ngOnInit(): void {

  }

  nombre = "";
  clave = "";


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

  loguear(email:string, pass:string){
    this.authService.SignIn(email,pass)
    .then(() => {
      this.Toast.fire({
        icon: 'success',
        title: "Usuario logueado correctamente"
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
  dameUsuarios() {
    let listadoGuardado;
    listadoGuardado = localStorage.getItem("listadoDeUsuarios");
    if (listadoGuardado != null) {
      listadoGuardado = JSON.parse(listadoGuardado);
    }
    return listadoGuardado;
  }
  ingresar() {

    let listadoGuardado = this.dameUsuarios();

    let usuarioEncontrado = listadoGuardado.find((usuario: any) => usuario.nombre == this.nombre)

    console.info("usuario : ", usuarioEncontrado)


    if (usuarioEncontrado) {
      console.info("usuario encontrado", usuarioEncontrado);
      if (usuarioEncontrado.clave == this.clave) {
        console.log("ingreso");
        this.Toast.fire({
          icon: 'success',
          title: usuarioEncontrado.nombre + ' inició sesión correctamente'
        });
        delay(2000);
      }
      else {
        console.log("no es la clave");
        console.log("ingreso");
        this.Toast.fire({
          icon: 'error',
          title: 'Contraseña incorrecta'
        });
      }

    }
    else {
      console.log("no esta");
      this.Toast.fire({
        icon: 'error',
        title: 'Usuario inexistente',
      });
    }
  }
  */

}
