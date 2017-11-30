webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicial_inicial__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, userService, storage) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.storage = storage;
        this.userData = { code: "", password: "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var a = this.userService.postData(this.userData).subscribe(function (response) {
            console.log(response);
            localStorage.setItem('userData', JSON.stringify(response));
            var data = JSON.parse(localStorage.getItem('userData'));
            if (data.response == "error") {
                console.log(data.message);
                _this.isLogged = "error";
            }
            else {
                //console.log(data.result.token);
                localStorage.setItem('logeed', 'yes');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicial_inicial__["a" /* InicialPage */]);
            }
            // set a key/value
            //this.storage.set("token", response);
            // Or to get a key/value pair
            // this.storage.get("token").then(val => {
            //   console.log("Your age is", val);
            // });
        }, function (error) { });
    };
    // .then((result)=>{
    //       this.responseData=result;
    //       console.log(this.responseData);
    //       localStorage.setItem('userData',JSON.stringify(this.responseData))
    //       this.navCtrl.push(TabsPage, {}, {animate: false});
    //     }, (err)=>{
    // //error
    // } );
    LoginPage.prototype.goPrincipal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: false });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"E:\navegacion1\src\pages\login\login.html"*/'<ion-header>\n\n <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">\n\n</ion-header>\n\n\n<br><br>\n\n<div text-center>\n<img  src="assets/imgs/logo.png" width="160" height="160">\n\n</div>\n\n\n\n\n<p class="big" text-center >ALTEM</p>\n\n<ion-row>\n\n\n<ion-item class="prueba">\n    <ion-label color="primary" stacked>Codigo</ion-label>\n    <ion-input  type="text" placeholder="T00012345" [(ngModel)]="userData.code"></ion-input>\n  </ion-item>\n</ion-row>\n\n\n  <ion-row>\n  <ion-item class="prueba">\n    <ion-label color="primary" stacked>Contraseña</ion-label>\n    <ion-input  type="password" placeholder="******" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n  </ion-row>\n\n\n\n<br><br>\n\n<ion-row>\n  <ion-col text-center>\n   <button ion-button (click)="login()">Iniciar sesion</button>\n  </ion-col>\n</ion-row>\n\n<div *ngIf="isLogged==\'error\';">\n  <p text-center>Error! Datos incorrectos.</p>\n</div>\n\n\n'/*ion-inline-end:"E:\navegacion1\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__estadisticas_estadisticas__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asistencia_asistencia__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__asistencia_asistencia__["a" /* AsistenciaPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__estadisticas_estadisticas__["a" /* EstadisticasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\navegacion1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Asistencia" tabIcon="done-all"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Estadisticas" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\navegacion1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tomar_asistencia_tomar_asistencia__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsistenciaPage = (function () {
    function AsistenciaPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    AsistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsistenciaPage');
    };
    AsistenciaPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Confirmar',
            message: '¿Quiere tomar la asistencia del curso con NRC 1475?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //logic
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        //logic
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tomar_asistencia_tomar_asistencia__["a" /* TomarAsistenciaPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    AsistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asistencia',template:/*ion-inline-start:"E:\navegacion1\src\pages\asistencia\asistencia.html"*/'<!--\n  Generated template for the Pagina2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asistencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   <!--  <button  class="boton" ion-button icon-start (click)="doConfirm()"  >\n  <ion-icon name="md-create"></ion-icon>\n  Tomar Asistencia\n</button> -->\n\n\n</ion-content>\n'/*ion-inline-end:"E:\navegacion1\src\pages\asistencia\asistencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AsistenciaPage);
    return AsistenciaPage;
}());

//# sourceMappingURL=asistencia.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomarAsistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TomarAsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TomarAsistenciaPage = (function () {
    function TomarAsistenciaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TomarAsistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TomarAsistenciaPage');
    };
    TomarAsistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tomar-asistencia',template:/*ion-inline-start:"E:\navegacion1\src\pages\tomar-asistencia\tomar-asistencia.html"*/'<!--\n  Generated template for the TomarAsistenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asistencia</ion-title>\n       \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n<ion-list>\n   <ion-item>\n    <ion-label>Estudiante 1 </ion-label>\n    <ion-checkbox [(ngModel)]="pepperoni1"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 2 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni2"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 3 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni3"></ion-checkbox>\n   </ion-item>\n     <ion-item>\n    <ion-label>Estudiante 4 </ion-label>\n    <ion-checkbox [(ngModel)]="pepperoni4"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 5 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni5"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 6 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni6"></ion-checkbox>\n   </ion-item>\n    \n     <ion-item>\n    <ion-label>Estudiante 7 </ion-label>\n    <ion-checkbox [(ngModel)]="pepperoni7"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 8 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni8"></ion-checkbox>\n   </ion-item>\n	\n   <ion-item>\n     <ion-label>Estudiante 9 </ion-label>\n       <ion-checkbox [(ngModel)]="pepperoni9"></ion-checkbox>\n   </ion-item>\n</ion-list>\n    <button ion-button  icon-start class="boton2">\n  <ion-icon name="send"></ion-icon>\n  Enviar\n</button>\n</ion-content>\n'/*ion-inline-end:"E:\navegacion1\src\pages\tomar-asistencia\tomar-asistencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TomarAsistenciaPage);
    return TomarAsistenciaPage;
}());

//# sourceMappingURL=tomar-asistencia.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asistencia/asistencia.module": [
		294,
		1
	],
	"../pages/tomar-asistencia/tomar-asistencia.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstadisticasPage = (function () {
    function EstadisticasPage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.users = [];
    }
    EstadisticasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getEstudentsNow()
            .subscribe(function (data) {
            _this.users = data['results'];
        }, function (error) {
            console.error(error);
        });
    };
    EstadisticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadisticas',template:/*ion-inline-start:"E:\navegacion1\src\pages\estadisticas\estadisticas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Estadisticas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-list>\n\n    <ion-item *ngFor="let user of users">\n\n      <ion-avatar item-start>\n\n        <img [src]="user.picture.medium">\n\n      </ion-avatar>\n\n      <h2>{{ user.name.first | uppercase }}</h2>\n\n      <p>{{ user.email }}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\navegacion1\src\pages\estadisticas\estadisticas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserService */]])
    ], EstadisticasPage);
    return EstadisticasPage;
}());

//# sourceMappingURL=estadisticas.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = (function () {
    function PerfilPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PerfilPage.prototype.salir = function () {
        this.viewCtrl.dismiss;
        this.navCtrl.popAll;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        //this.navCtrl.push(LoginPage);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"E:\navegacion1\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar hideBackButton >\n    <ion-buttons start>\n      <button ion-button (click)="salir()" >\n        Cerrar sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"E:\navegacion1\src\pages\perfil\perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InicialPage = (function () {
    function InicialPage(navCtrl, alerCtrl, userService) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.userService = userService;
        this.users = [];
        this.students = [];
        this.userData = { code: "" };
    }
    InicialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getEstudentsNow()
            .subscribe(function (data) {
            _this.users = data['data'];
            _this.students = _this.users['Students'];
            console.log(_this.students);
        }, function (error) {
            console.error(error);
        });
    };
    InicialPage.prototype.doCancel = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Cancelar',
            message: '¿Esta seguro de cancelar la asistencia?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //logic
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        //logic
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    InicialPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Confirmarr',
            message: '¿Esta seguro que desea enviar la asistencia?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //logic
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        //logic
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    InicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicial',template:/*ion-inline-start:"E:\navegacion1\src\pages\inicial\inicial.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <!-- <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-buttons start>\n      <button ion-button (click)="doConfirm()">\n        Enviar\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="doCancel()">\n        Cancelar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor="let st of students">\n    <!--   <ion-avatar item-left>\n         <img [src]="\'http://savio.utbvirtual.edu.co/user/external_render_pic.php?user=uws1&pass=uws1&wsusername= \'".concat( {{ st.ID }} )/>\n      <img [src]="\'http://savio.utbvirtual.edu.co/user/external_render_pic.php?user=uws1&pass=uws1&wsusername=T00026138\'"/>\n      </ion-avatar> -->\n      <ion-label class="tam">{{ st.NOMBRES }}&nbsp;{{ st.APELLIDOS }}<br>{{ st.ID }}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n\n\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\navegacion1\src\pages\inicial\inicial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserService */]])
    ], InicialPage);
    return InicialPage;
}());

//# sourceMappingURL=inicial.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_estadisticas_estadisticas__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicial_inicial__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_asistencia_asistencia__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tomar_asistencia_tomar_asistencia__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_service_user_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tomar_asistencia_tomar_asistencia__["a" /* TomarAsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inicial_inicial__["a" /* InicialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asistencia/asistencia.module#AsistenciaPageModule', name: 'AsistenciaPage', segment: 'asistencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tomar-asistencia/tomar-asistencia.module#TomarAsistenciaPageModule', name: 'TomarAsistenciaPage', segment: 'tomar-asistencia', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tomar_asistencia_tomar_asistencia__["a" /* TomarAsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inicial_inicial__["a" /* InicialPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__providers_user_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\navegacion1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\navegacion1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        console.log('Hello UserServiceProvider Provider');
        console.log(this.http);
    }
    UserService.prototype.getEstudentsNow = function () {
        var data = JSON.parse(localStorage.getItem('userData'));
        return this.http.get('http://192.34.79.113/api/now?token='.concat(data.result.token));
    };
    UserService.prototype.postMissing = function (data) {
        //   	return new Promise((resolve,reject)=>{
        //   		let headers = new Headers({
        // 	'Content-Type': 'application/x-www-form-urlencoded'
        // });
        // let options = new RequestOptions({
        // 	headers: headers
        // });
        1;
        //console.log(data);
        return this.http.post('http://192.34.79.113/api/missing', data);
    };
    UserService.prototype.postData = function (data) {
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
        return this.http.post('http://192.34.79.113/api/login', data);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map