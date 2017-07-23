import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CitaService } from '../../app/services/CitaService';
import { ContactoService } from '../../app/services/ContactoService';
import { CitaPage } from './cita';

@Component({
  selector: 'page-cita-form',
  templateUrl: 'cita-form.html',
})
export class CitaFormPage implements OnInit {
  private parametro:string;
  private titulo:string;



  private cita:any = {
    lugar: "",
    fecha: "",
    idContacto: 0,
    idCita: 0,
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public citaService: CitaService,
    public contactoService: ContactoService,
    public citaAlert: AlertController
  ) {


    this.parametro = this.navParams.get('parametro');

    if(this.parametro != "nuevo") {
      this.citaService.getCita(this.parametro)
      .subscribe(res => this.cita = res);
      console.log(this.cita.lugar);
      console.log('Editar');
      this.titulo = "Detalle Cita"
    } else {
      console.log('agregar');
      this.titulo = "Nuevo Cita";

    }
  }

  ngOnInit() {}

  public guardar() {
    console.log('agrego');
      if(this.parametro != "nuevo") {
        this.citaService.editarCita(this.cita)
        .subscribe(res => {

          this.citaAlert.create({
            message: res.mensaje,
            buttons: ['Ok']
          }).present();

          setTimeout(() => {
            if(res.estado) {

            } else{
              this.navCtrl.push(CitaPage);
            }
          }, 3000);

        });
    } else {
      this.citaService.nuevaCita(this.cita)
      .subscribe(res => {
        this.citaAlert.create({
          message: res.mensaje,
          buttons: ['Ok']
        }).present();

        setTimeout(() => {
          if(res.estado) {
            this.navCtrl.push(CitaPage);
          } else {
            this.cita.lugar = "";
            this.cita.fecha = "";
            this.cita.idContacto = 0;
          }
        }, 3000);

      });
    }
  }
}
