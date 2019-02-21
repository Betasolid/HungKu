import { Component, OnInit } from '@angular/core';
import { TodoservicioService } from './../../servicios/todoservicio.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.page.html',
  styleUrls: ['./modal-eventos.page.scss'],
})
export class ModalEventosPage implements OnInit {

  private todo: FormGroup;
  myLoading: any;

  /**
   * Constructor de la clase
   * @param formBuilder Constructor del formulario
   * @param todoS Servicios
   * @param loadingController Controlador del cargando
   * @param modalController Controlador del modal
   */
  constructor(
    private formBuilder: FormBuilder,
    private todoS: TodoservicioService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      localizacion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  /**
   * Metodo para cerrar el modal
   */
  dismiss() {
    this.modalController.dismiss();
  }

}
