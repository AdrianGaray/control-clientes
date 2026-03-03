import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})

// Modificamos el componente de cabecero para mostrar u ocultar las opciones de la barra de 
// navegación para hacer login o salir del sistema dependiendo del si el usuario ya ha hecho login o no en el sistema.
export class CabeceroComponent {
  isLoggedIn: boolean = false;
  loggedInUser: string | null = null; // almacena el email

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getAuthState().subscribe(usuario => {
      if (usuario) {
        this.isLoggedIn = true;
        this.loggedInUser = usuario.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }  

}
