import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitaService } from '../../app/services/CitaService';
import { CitaFormPage } from './cita-form';

@Component({
  selector: 'page-cita',
  templateUrl: 'cita.html'
})
export class CitaPage {
  private citas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public citaService: CitaService
  ) {
    this.inicializar();
  }

  private inicializar() {
    this.citaService.getCitas()
    .subscribe(citas => this.citas = citas);
  }

  public verFormulario(parametro:any) {
    this.navCtrl.push(CitaFormPage, { parametro });
  }

  borrarCita(idCita:any) {
    this.citaService.eliminarCita(idCita)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}
