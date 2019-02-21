import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TodoservicioService {
  myCollectionPersonas: any;
  myCollectionEventos: any;
  constructor(private fireStore: AngularFirestore) {
    /* Crea una referencia a la colección 'todo' que empleamos para realizar las
   operaciones CRUD*/
    this.myCollectionPersonas = fireStore.collection<any>(environment.firebaseConfig.personasColeccion);
    this.myCollectionEventos = fireStore.collection<any>(environment.firebaseConfig.eventosColeccion);
  }

  /**
   * Metodo que agregar un participante a la base de datos
   * @param datos son los datos del formulario para añadir participante
   * @returns Promise
   */
  agregaParticipante(datos) {
    return this.myCollectionPersonas.add(datos);
  }

 /**
  * Metodo para agregar un evento a la base de datos
  * @param datos son los datos del formulario para añadir un evento
  */
  agregaEventos(datos) {
    return this.myCollectionEventos.add(datos);
  }

 /**
  * Metodo que devuelve el listado de los participantes
  * @returns Promise
  */
  getListadoParticipantes() {
    return this.myCollectionPersonas.get();
  }

 /**
  * Metodo que devuelve el listado de eventos
  * @returns Promise
  */
 getListadoEventos() {
   return this.myCollectionEventos.get();
 }

 /**
  * Metodo que devuelve un participante segun su id
  * @param id
  * @returns Observable
  */
  leeParticipante(id) {
    return this.myCollectionPersonas.doc(id).get();
  }

 /**
  * Metodo que actualiza la informacion de un participante en la base de datos
  * @param id Es el id del participante a actualizar
  * @param data Son los datos nuevos para actualizar el participante
  * @returns Observable
  */
  actualizaParticipante(id, data) {
    return this.myCollectionPersonas.doc(id).set(data);
  }

 /**
  * Metodo que elimina un participante de la base de datos por su ID
  * @param id Id del participante que se va a eliminar
  * @return Observable
  */
  borraParticipante(id) {
    return this.myCollectionPersonas.doc(id).delete();
  }
}
