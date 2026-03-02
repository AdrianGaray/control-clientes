import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  imports: [FormsModule, RouterModule], // Importamos módulos necesarios 
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css'
})
export class EditarClienteComponent {
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: undefined
  }

  id: string | null = null;

  constructor(
    private clienteServicio: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Obtener el 'id' del parámetro de ruta 
    this.id = this.route.snapshot.paramMap.get('id');

    // Verificar si el 'id' no es null antes de buscar el cliente
    if (this.id) {
      this.clienteServicio.getCliente(this.id).subscribe((cliente: Cliente | null) => {
        if (cliente) {
          // Asignar el cliente si existe 
          this.cliente = cliente;
        } else {
          console.log('Cliente no encontrado: ' + this.id);

          // Redirigir al inicio si no se encuentra el cliente 
          this.router.navigate(['/']);
        }
      });
    } else {
      console.log('ID no proporcionado');

      // Redirigir al inicio si no hay ID 
      this.router.navigate(['/']);
    }
  }

  guardar(_t9: NgForm) {
    throw new Error('Method not implemented.');
  }

  eliminar() {
    throw new Error('Method not implemented.');
  }

}
