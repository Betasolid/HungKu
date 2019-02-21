import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoservicioService } from 'src/app/servicios/todoservicio.service';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-edit',
  templateUrl: './modal-add-edit.page.html',
  styleUrls: ['./modal-add-edit.page.scss'],
})

export class ModalAddEditPage implements OnInit {

  private todo: FormGroup;
  myLoading: any;
  valores: any;
  id: any;
  nombre: any;
  edad: any;

  /**
   * Constructor de la clase
   * @param formBuilder Constructo del formulario
   * @param todoS Servicios
   * @param router
   * @param loadingController Controlador del loading
   * @param modalController Controllador del modal
   * @param navParams Parametros de navegacion
   */
  constructor(
    private formBuilder: FormBuilder,
    private todoS: TodoservicioService,
    private router: Router,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    this.valores = this.navParams.get('values');

    this.todo = this.formBuilder.group({
      nombre: [this.nombre,  Validators.required],
      edad: [this.edad,  Validators.required],
    });
  }

  logForm() {
    const data = {
      nombre: this.todo.get('nombre').value,
      edad: this.todo.get('edad').value
    };

    /* Mostramos el cargando... */
    this.myLoading = this.presentLoading();
    this.todoS.actualizaParticipante(this.id, data)
      .then((docRef) => {
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
        this.modalController.dismiss();
      })
      .catch((error) => {
        console.error('Error insertando documento: ', error);
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
      });
  }

  /**
   * Crea la ventana de loading en la app
   */
  async presentLoading() {
    this.myLoading = await this.loadingController.create({
      message: 'Guardando'
    });
    return await this.myLoading.present();
  }

  ngOnInit() {
    console.log(this.nombre, this.edad);
  }

  /**
   * Cierra la ventana del modal de la aplicacion
   */
  dismiss() {
    this.modalController.dismiss();
  }

}
