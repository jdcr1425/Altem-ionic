import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AsistenciaPage } from "../asistencia/asistencia";
import { TabsPage } from "../tabs/tabs";
import { InicialPage } from "../inicial/inicial";
import { UserService } from "../../providers/user-service/user-service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  isLogged:any;
  responseData: any;
  userData = { code: "", password: "" };

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    private storage: Storage
  ) {}

  login() {
    var a = this.userService.postData(this.userData).subscribe(
      response => {
        console.log(response);

        localStorage.setItem('userData',JSON.stringify(response));

        const data=JSON.parse(localStorage.getItem('userData'));


        if(data.response=="error"){
          console.log(data.message);
          this.isLogged="error";
        }else{
          //console.log(data.result.token);
          localStorage.setItem('logeed','yes');
          this.navCtrl.push(InicialPage);
        }
        // set a key/value
        //this.storage.set("token", response);



        // Or to get a key/value pair
        // this.storage.get("token").then(val => {
        //   console.log("Your age is", val);

        // });
      },
      error => {}
    );
  }

  // .then((result)=>{
  //       this.responseData=result;
  //       console.log(this.responseData);
  //       localStorage.setItem('userData',JSON.stringify(this.responseData))
  //       this.navCtrl.push(TabsPage, {}, {animate: false});
  //     }, (err)=>{

  // //error

  // } );

  goPrincipal(): void {
    this.navCtrl.push(TabsPage, {}, { animate: false });
  }
}
