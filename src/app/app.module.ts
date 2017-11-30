import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { InicialPage } from '../pages/inicial/inicial';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { TomarAsistenciaPage } from '../pages/tomar-asistencia/tomar-asistencia';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserService } from '../providers/user-service/user-service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PerfilPage,
    TabsPage,
    AsistenciaPage,
    EstadisticasPage,
    TomarAsistenciaPage,
    InicialPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PerfilPage,
    TabsPage,
    AsistenciaPage,
    EstadisticasPage,
    TomarAsistenciaPage,
    InicialPage
  ],
  providers: [
    StatusBar,
    UserService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}


  ]
})
export class AppModule {}
