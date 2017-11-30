import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TomarAsistenciaPage } from '../tomar-asistencia/tomar-asistencia';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }
  

  
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Confirmar',
      message: '¿Quiere tomar la asistencia del curso con NRC 1475?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
           //logic
          }
        },
        {
          text: 'OK',
          handler: () => {
            //logic
            this.navCtrl.push(TomarAsistenciaPage);
          }
        }
      ]
    });
    confirm.present()
}
  

}
