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
import { FooterComponent } from './Componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
//ejemplo de iput/output
import { PagePadreComponent } from './ejemploInputOutput/page/page-padre/page-padre.component';
import { ComponenteAltaComponent } from './ejemploInputOutput/componente/componente-alta/componente-alta.component';
import { ComponenteDetalleComponent } from './ejemploInputOutput/componente/componente-detalle/componente-detalle.component';
import { ComponenteListadoComponent } from './ejemploInputOutput/componente/componente-listado/componente-listado.component';
import { HomeComponent } from './Componentes/home/home.component'; //para api github
import { AuthService } from './Servicios/auth.service';
//

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    PagePadreComponent,
    ComponenteAltaComponent,
    ComponenteDetalleComponent,
    ComponenteListadoComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //para Api Github
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
