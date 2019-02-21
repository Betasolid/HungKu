import { TodoservicioService } from './../../servicios/todoservicio.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-solo-add',
  templateUrl: './modal-solo-add.page.html',
  styleUrls: ['./modal-solo-add.page.scss'],
})

export class ModalSoloAddPage implements OnInit {

  private todo: FormGroup;
  myLoading: any;

  /**
   * Constructos de la clase
   * @param formBuilder Constructor del formulario
   * @param todoS Servicios
   * @param loadingController Controllador del cargando
   * @param modalController Controllador del modal
   */
  constructor(
    private formBuilder: FormBuilder,
    private todoS: TodoservicioService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  logForm() {
    const data = {
      nombre: this.todo.get('nombre').value,
      edad: this.todo.get('edad').value
    };

    /* Mostramos el cargando... */
    this.myLoading = this.presentLoading();
    this.todoS.agregaParticipante(data)
      .then((docRef) => {
        console.log('ID insertado (por si lo necesitamos para algo...): ', docRef.id);
        /* Ponemos en blanco los campos del formulario*/
        this.todo.setValue({
          nombre: '',
          edad: ''
        });
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
        this.modalController.dismiss();
      })
      .catch((error) => {
        console.error('Error insertando documento: ', error);
        this.loadingController.dismiss();
      });
  }

  async presentLoading() {
    this.myLoading = await this.loadingController.create({
      message: 'Guardando'
    });
    return await this.myLoading.present();
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
