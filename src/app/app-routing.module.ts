import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-add-edit', loadChildren: './modal/modal-add-edit/modal-add-edit.module#ModalAddEditPageModule' },
  { path: 'modal-solo-add', loadChildren: './modal/modal-solo-add/modal-solo-add.module#ModalSoloAddPageModule' },
  { path: 'modal-eventos', loadChildren: './modal/modal-eventos/modal-eventos.module#ModalEventosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
