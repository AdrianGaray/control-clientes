import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  // CommonModule para poder utilizar el pipe de currency en la plantilla
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] | null = null;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: undefined
  };

  @ViewChild('botonCerrar') botonCerrar!: ElementRef;

  constructor(private clienteServicio: ClienteService) { }

  // ngOnInit: Cuando el componente se inicializa, se llama al servicio ClienteServicio para obtener la lista de clientes desde Firestore. 
  // Se usa subscribe para recibir la lista y almacenarla en la propiedad clientes. 
  ngOnInit() {
    // Al inicializar el componente, se suscribe al servicio para obtener la lista de clientes 
    this.clienteServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;  // Almacena el listado en la propiedad 'clientes' 
    });
  }

  getSaldoTotal(): number {
    return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0;
  }

  agregar(clienteForm: NgForm) {
    const { value, valid } = clienteForm;
    if (valid) {
      // Agregamos la logica para guardar el cliente
      this.clienteServicio.agregarCliente(value);
      // Limpiamos el formulario
      clienteForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
}
