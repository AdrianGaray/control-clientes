// Con esto hemos creado el servicio de clientes que nos permite conectarnos a Cloud Firestore
// Y realizar consultas. Ahora podemos obtener y mostrar los datos de los clientes en nuestra aplicación. 
import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente.modelo';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, query, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Observable<Cliente[]>;

  // Firestore: Utilizamos el servicio Firestore de Angular para interactuar con Cloud Firestore. 
  constructor(private firestore: Firestore) {
    // Realizamos una consulta para obtener el listado de clientes
    // collection(): Esta función obtiene la referencia a la colección clientes dentro de Firestore. 
    const clientesRef = collection(this.firestore, 'clientes');
    //  query(): Se utiliza para ordenar los resultados de la consulta por el campo nombre en orden ascendente. 
    const consulta = query(clientesRef, orderBy('nombre', 'asc'));
    //  Convierte los resultados de la consulta en un Observable que contiene los datos de los clientes, añadiendo también el id del documento con la opción { idField: 'id' }. 
    this.clientes = collectionData(consulta, { idField: 'id' }) as Observable<Cliente[]>;
  }

  getClientes(): Observable<Cliente[]> {
    return this.clientes;
  }
}
