import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html'
})
export class InicialPage {

  users:any[]= [];
  students:any[]=[];

  userData = { code: ""};



  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public userService: UserService) {

  }




  ionViewDidLoad(){


    this.userService.getEstudentsNow()
    .subscribe(
      (data) => { // Success
        this.users = data['data'];
        this.students=this.users['Students'];
        console.log(this.students);
      },
      (error) =>{
        console.error(error);
      }
    )
  }







 doCancel() {
    let confirm = this.alerCtrl.create({
      title: 'Cancelar',
      message: '¿Esta seguro de cancelar la asistencia?',
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
            this.navCtrl.push(TabsPage);
          }
        }
      ]
    });
    confirm.present()
}


doConfirm() {
  let confirm = this.alerCtrl.create({
    title: 'Confirmarr',
    message: '¿Esta seguro que desea enviar la asistencia?',
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
          this.navCtrl.push(TabsPage);
        }
      }
    ]
  });
  confirm.present()
}



}
