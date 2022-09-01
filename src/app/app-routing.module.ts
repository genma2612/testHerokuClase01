import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { AboutComponent } from './Componentes/about/about.component';

const routes: Routes = [
  { path: "registro", component: RegistroComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "", component: BienvenidoComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
