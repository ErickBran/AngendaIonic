import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactoService } from './services/ContactoService';
import { AuthService } from './services/AuthService';
import { TareaService } from './services/TareaService';
import { CitaService } from './services/CitaService';

import { ContactosPage } from '../pages/contactos/contactos';
import { ContactoFormPage } from '../pages/contactos/contacto-form';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TareaPage } from '../pages/tarea/tarea';
import { TareaFormPage } from '../pages/tarea/tarea-form';
import { CitaPage } from '../pages/cita/cita';
import { CitaFormPage } from '../pages/cita/cita-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactosPage,
    HomePage,
    TabsPage,
    LoginPage,
    TareaPage,
    CitaPage,
    ContactoFormPage,
    TareaFormPage,
    CitaFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactosPage,
    HomePage,
    TabsPage,
    LoginPage,
    TareaPage,
    CitaPage,
    ContactoFormPage,
    TareaFormPage,
    CitaFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ContactoService,
    TareaService,
    CitaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
