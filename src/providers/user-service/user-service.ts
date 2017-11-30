import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {


loggedIn ;

  constructor(private http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
   console.log(this.http);

  }


    getEstudentsNow() {
      const data=JSON.parse(localStorage.getItem('userData'));
      return this.http.get('http://192.34.79.113/api/now?token='.concat(data.result.token));
    }



    postMissing(data){


        //   	return new Promise((resolve,reject)=>{

        //   		let headers = new Headers({
          // 	'Content-Type': 'application/x-www-form-urlencoded'
          // });
          // let options = new RequestOptions({
          // 	headers: headers
          // });
   1
            //console.log(data);
              return this.http.post('http://192.34.79.113/api/missing' ,data);

    }
    postData(data){


  //   	return new Promise((resolve,reject)=>{

  //   		let headers = new Headers({
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		// });
		// let options = new RequestOptions({
		// 	headers: headers
		// });
        // var data={
        //   code:"T00026138",
        //   password: "jdcr37"
        // };
      //console.log(data);
    		return this.http.post('http://192.34.79.113/api/login' ,data);

    }








}
