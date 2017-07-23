import { Component } from '@angular/core';

import { ContactosPage } from '../contactos/contactos';
import { HomePage } from '../home/home';
import { TareaPage } from '../tarea/tarea';
import { CitaPage } from '../cita/cita';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TareaPage;
  tab2Root = ContactosPage;
  tab3Root = CitaPage;

  constructor() {

  }
}
