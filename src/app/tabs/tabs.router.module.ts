import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

/* Aqui es donde estan enrutadas las tabs para que puedas navegar entre ellas */
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabInicio',
        children: [
          {
            path: '',
            loadChildren: '../tabInicio/tabInicio.module#TabInicioPageModule'
          }
        ]
      },
      {
        path: 'tabListado',
        children: [
          {
            path: '',
            loadChildren: '../tabListado/tabListado.module#TabListadoPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabInicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabInicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
