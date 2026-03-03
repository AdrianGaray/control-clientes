import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate {

  constructor(
    private authService: Auth,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return authState(this.authService).pipe(
      // Operador !!auth: Convierte el valor de auth en un booleano. 
      // Si el usuario está autenticado (es decir, auth existe), se convierte en true. Si no, será false. 
      // Si auth es falso (es decir, el usuario no está autenticado), se redirige al usuario a la página de login (this.router.navigate(['/login'])) y se retorna false. 
      //Esto bloquea el acceso a la ruta protegida.
      map(auth => !!auth || (this.router.navigate(['/login']), false))
    );
  }

  /*canActivate(): Observable<boolean> {
    return authState(this.authService).pipe(
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }*/

}
