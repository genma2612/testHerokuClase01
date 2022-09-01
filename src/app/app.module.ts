import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Usuario } from './Clases/usuario';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { AboutComponent } from './Componentes/about/about.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
