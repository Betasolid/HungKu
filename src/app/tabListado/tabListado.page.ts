import { ModalAddEditPage } from './../modal/modal-add-edit/modal-add-edit.page';
import { Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { TodoservicioService } from './../servicios/todoservicio.service';
import { ModalSoloAddPage } from '../modal/modal-solo-add/modal-solo-add.page';

@Component({
  selector: 'app-tabListado',
  templateUrl: 'tabListado.page.html',
  styleUrls: ['tabListado.page.scss']
})
export class TabListadoPage {
  @ViewChild('dynamicList') dynamicList;
  listado = [];
  listadoPanel = [];

  /**
   * Constructor de la clase
   * @param todoService Servicios
   * @param loadingController Controlador del cargando
   * @param modalController Controlador del modal
   * @param actionSheetController Controlador del actionSheet
   */
  constructor(
    private todoService: TodoservicioService,
    public loadingController: LoadingController,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController
  ) {
  }

  ionViewDidEnter() {
    this.presentLoading('Cargando');
    this.todoService.getListadoParticipantes()
      .subscribe((querySnapshot) => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        // console.log(this.listado);
        this.listadoPanel = this.listado;
        this.loadingController.dismiss();
      });
  }

  /* Esta función es llamada por el componente Refresher*/
  doRefresh(refresher?) {
    this.todoService.getListadoParticipantes()
      .subscribe(querySnapshot => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanel = this.listado;
        if (refresher) {
          refresher.target.complete();
        }
      });
  }

  /**
   * Metodo de loading
   * @param msg Mensaje a mostrar en el loading
   */
  async presentLoading(msg) {
    const myloading = await this.loadingController.create({
      message: msg
    });
    return await myloading.present();
  }

  // Este metodo tiene que llamar al modal para crear un nuevo miembro
  async presentModalEdit(id, nombre, edad) {
    const modal = await this.modalController.create({
      component: ModalAddEditPage,
      componentProps: {
        id: id,
        nombre: nombre,
        edad: edad
      }
    });

    modal.onDidDismiss()
      .then(() => {
        this.doRefresh();
      });

    return await modal.present();
  }

  async presentModalAdd() {
    const modal = await this.modalController.create({
      component: ModalSoloAddPage,
      componentProps: {

      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.doRefresh();
      });

    return await modal.present();
  }

  /**
   * Action sheet para borrar
   * @param id Id del elemento a borrar
   * @returns Promise
   */
  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Desea eliminar esta persona?',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.todoService.borraParticipante
            (id);
          this.ionViewDidEnter();
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.ionViewDidEnter();
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getFilteredItem(ev: any) {
    // set val to the value of the ev target
    // tslint:disable-next-line:prefer-const
    let val = ev.target.value;
    this.listadoPanel = this.listado.filter((item) => {
      return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }
  clearMe(ev: any) {
    return this.listado;
  }
}
