import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // Utilizamos FormsModule para manejar la entrada de datos del formulario
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Las variables email y password almacenarán los datos ingresados en el formulario. 
  email: string | null = null;
  password: string | null = null;

  constructor(private router: Router) { }

  // El método login() se encargará de la autenticación una vez que se implemente. 
  login() {
    throw new Error('Method not implemented.');
  }
}
