import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController,private viewCtrl : ViewController) {

  }


  salir(): void {
    this.viewCtrl.dismiss;
    this.navCtrl.popAll;
    this.navCtrl.setRoot(LoginPage);
    //this.navCtrl.push(LoginPage);


  }

}
