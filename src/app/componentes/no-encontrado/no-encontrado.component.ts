import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-no-encontrado',
  // RouterModule: Se importa este módulo para que la plantilla pueda usar enlaces de navegación (routerLink). 
  imports: [RouterModule],
  templateUrl: './no-encontrado.component.html',
  styleUrl: './no-encontrado.component.css'
})
export class NoEncontradoComponent {

}
