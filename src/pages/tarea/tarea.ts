import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { TareaService } from '../../app/services/TareaService';
import { TareaFormPage } from './tarea-form';

@Component({
  selector: 'page-tarea',
  templateUrl: 'tarea.html'
})
export class TareaPage {
  private tareas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public tareaService: TareaService,
    public tareaActionSheet: ActionSheetController
  ) {
    this.inicializar();
  }

  private inicializar() {
    this.tareaService.getTareas()
    .subscribe(tareas => this.tareas = tareas);
  }

  public verFormulario(parametro:any) {
    this.navCtrl.push(TareaFormPage, { parametro });
  }

  borrarTarea(idTarea:any) {
    this.tareaService.eliminarTarea(idTarea)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}
