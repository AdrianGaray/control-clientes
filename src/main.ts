// se agregar la configuración de Firestore y conectarnos a la base de datos.
// También se agrega el proveedor de HTTP que usaremos para realizar peticiones a la base de Cloud Firestore

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment.development';

// Firebase imports para aplicaciones standalone 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    // Añade el cliente HTTP que usaremos para hacer peticiones a Firebase y otras APIs
    provideHttpClient(),
    // Inicializa la configuración de Firebase con los valores del archivo environment
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),  // Inicializa Firebase 
    // Proveedor de Firestore que permite la conexión con la base de datos.
    provideFirestore(() => getFirestore()), // Inicializa Firestore. 
    // Proveedor de autenticación para manejar usuarios y sesiones. 
    provideAuth(() => getAuth()),  // Inicializa Auth 
    //  Proveedor de almacenamiento para trabajar con archivos en Firebase. 
    provideStorage(() => getStorage()), // Inicializa Storage 
    ...appConfig.providers // Desestructuramos los providers del appConfig si es necesario 
  ]
})
  .catch((err) => console.error(err));
