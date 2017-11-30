import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AsistenciaPage;
  tab2Root = EstadisticasPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
