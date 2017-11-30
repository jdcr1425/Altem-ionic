import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html'
})
export class EstadisticasPage {

     users: any[] = [];

  constructor(public navCtrl: NavController, public userService: UserService) {

  }


ionViewDidLoad(){
    this.userService.getEstudentsNow()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
