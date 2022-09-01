import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  nombre = "";
  clave = "";

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
      }
      else {
        console.log("no es la clave");
      }

    }
    else {
      console.log("no esta");
    }
  }

}
