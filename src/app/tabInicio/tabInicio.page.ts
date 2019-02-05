import { FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { TodoservicioService } from '../servicios/todoservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabInicio',
  templateUrl: 'tabInicio.page.html',
  styleUrls: ['tabInicio.page.scss']
})
export class TabInicioPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('dynamicList') dynamicList;

  private evento: FormGroup;
  myLoading: any;

  // Slides
  SwipedTabsIndicator: any = null;
  tabs = ['selectTab(0)', 'selectTab(1)'];
  public category: any = '0';
  ntabs = 2;
  listado = [];
  listadoEvent = [];
  style: any;

  constructor(
    private todoService: TodoservicioService,
    public loadingController: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.evento = this.formBuilder.group({
      nombre: ['', Validators.required],
      localizacion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  /** */
  logForm() {
    const data = {
      nombre: this.evento.get('nombre').value,
      localizacion: this.evento.get('localizacion').value,
      descripcion: this.evento.get('descripcion').value
    };

    /* Mostramos el cargando... */
    this.myLoading = this.presentLoading('Cargando');
    this.todoService.agregaEventos(data)
      .then((docRef) => {
        console.log('ID insertado (por si lo necesitamos para algo...): ', docRef.id);
        /* Ponemos en blanco los campos del formulario*/
        this.evento.setValue({
          nombre: '',
          localizacion: '',
          descripcion: ''

        });
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
      })
      .catch((error) => {
        console.error('Error insertando documento: ', error);
        /* Cerramos el cargando...*/
        this.loadingController.dismiss();
      });
  }

  /* Metodo que se lanza al inicio de la pantalla */
  ionViewDidEnter() {
    this.presentLoading('Cargando');
    this.todoService.getListadoEventos()
      .subscribe((querySnapshot) => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        // console.log(this.listado);
        this.listadoEvent = this.listado;
        this.loadingController.dismiss();
      });
  }

  /* Actualiza la categoría que esté en ese momento activa*/
  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category; // to int;
    });
  }

  /* Esta función es llamada por el componente Refresher*/
  doRefresh(refresher) {
    this.todoService.getListadoEventos()
      .subscribe(querySnapshot => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        this.listadoEvent = this.listado;
        refresher.target.complete();
      });
  }

  /*Muestra la pantalla de cargando cuando se inicia el componente */
  async presentLoading(msg) {
    const myloading = await this.loadingController.create({
      message: msg
    });
    return await myloading.present();
  }
}
