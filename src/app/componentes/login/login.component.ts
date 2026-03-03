import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

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
  mensaje: string | null = null;

  constructor(private router: Router, private loginService: LoginService) { }

  // Evita que se muestre el formulario de login  
  // si el usuario ya esta logueado 
  ngOnInit() {
    this.loginService.getAuthState().subscribe(usuario => {
      if (usuario) {
        this.router.navigate(['/']);
      }
    });
  }

  // El método login() se encargará de la autenticación una vez que se implemente. 
  login() {
    // Verificación de que email y password no son null 
    if (this.email && this.password) {
      this.loginService.login(this.email, this.password)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch(error => {
          this.mensaje = 'Error al hacer login: ' + error;
        });
    } else {
      this.mensaje = 'Por favor, ingrese un email y una contraseña válidos.';
    }
  }
}
