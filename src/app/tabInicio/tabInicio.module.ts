import { TodoservicioService } from './../servicios/todoservicio.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabInicioPage } from './tabInicio.page';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { setTranslateLoader } from '../app.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forChild({  // Módulo de traducción
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild([{ path: '', component: TabInicioPage }])
  ],
  declarations: [TabInicioPage]
})
export class TabInicioPageModule {
  private todo: FormGroup;
  myLoading: any;

  constructor(
    private formBuilder: FormBuilder,
    private todoS: TodoservicioService,
    private router: Router,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }
}
