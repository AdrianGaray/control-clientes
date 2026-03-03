import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root' // Mantiene el servicio como inyectable en toda la aplicación
})

// El servicio LoginService inyecta el servicio de autenticación de Firebase (Auth). 
export class LoginService {

 // Inyectamos el servicio Auth en el constructor
  constructor(private authService: Auth) { }

  // El método login utiliza signInWithEmailAndPassword para intentar iniciar sesión con las credenciales proporcionadas. 
  // Si el inicio de sesión es exitoso, resuelve la promesa; en caso de error, rechaza la promesa con el mensaje de error. 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.authService, email, password)
        .then(datos => resolve(datos))
        .catch(error => reject(error));
    });
  }

}
