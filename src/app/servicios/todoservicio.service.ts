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
  /*
  Recibe un objeto y lo guarda como un documento nuevo en la colección Personas
  */
  agregaParticipante(datos) {
    return this.myCollectionPersonas.add(datos);
  }
  /*
  Recibe un objeto y lo guarda como documento nuevo en la coleccion de Eventos
  */
  agregaEventos(datos) {
    return this.myCollectionEventos.add(datos);
  }
  /*
  Recupera el listado de participantes
  Devuelve un Observable
  */
  getListadoParticipantes() {
    return this.myCollectionPersonas.get();
  }
  /*
  Recupera el listado de los eventos
  */
 getListadoEventos() {
   return this.myCollectionEventos.get();
 }
  /*
  Recupera todos los campos de un participante concreto identificado por la clave id de la
 colección participantes
  Devuelve un Observable
  */
  leeParticipante(id) {
    return this.myCollectionPersonas.doc(id).get();
  }
  /*
  Actualiza los campos (sobreescribe y añade) determinados por data en el
 participante identificado por id de la colección participantes
  Devuelve un Promise
  */
  actualizaParticipante(id, data) {
    return this.myCollectionPersonas.doc(id).set(data);
  }
  /*
  Elimina el participante identificado por id de la colección participantes
  Devuelve un Promise
  */
  borraParticipante(id) {
    return this.myCollectionPersonas.doc(id).delete();
  }
}
