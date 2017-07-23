import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { TareaService } from '../../app/services/TareaService';
import { TareaPage } from './tarea';

@Component({
  selector: 'page-tarea-form',
  templateUrl: 'tarea-form.html',
})
export class TareaFormPage implements OnInit {
  private parametro:string;
  private tituloPrincipal:string;

  private tarea:any = {
    titulo: "",
    descripcion: "",
    fechaInicial: "",
    fechaFinal: "",
    estado: 0,
    idTarea: 0,
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public tareaService: TareaService,
    public tareaAlert: AlertController
  ) {

    this.parametro = this.navParams.get('parametro');

    if(this.parametro != "nuevo") {
      this.tareaService.getTarea(this.parametro)
      .subscribe(res => this.tarea = res);
      this.tituloPrincipal = "Detalle Tarea"
    } else {
      this.tituloPrincipal = "Nuevo Tarea";
    }
  }

  ngOnInit() {}

  public guardar() {
  if(this.parametro != "nuevo") {
    this.tareaService.editarTarea(this.tarea)
    .subscribe(res => {
      this.tareaAlert.create({
        message: res.mensaje,
        buttons: ['Ok']
      }).present();

      setTimeout(() => {
        if(res.estado) {

        } else{
          this.navCtrl.push(TareaPage);
        }
      }, 3000);

    });
  }else{
    this.tareaService.nuevaTarea(this.tarea)
    .subscribe(res => {
      this.tareaAlert.create({
        message: res.mensaje,
        buttons: ['Ok']
      }).present();

      setTimeout(() => {
        if(res.estado) {
          this.navCtrl.push(TareaPage);
        } else {
          this.tarea.titulo = "";
          this.tarea.descripcion = "";
          this.tarea.fechaInicial = "";
          this.tarea.fechaFinal = "";

        }
      }, 3000);

    });
  }


  }
}
