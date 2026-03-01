import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  // CommonModule para poder utilizar el pipe de currency en la plantilla
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] | null = null;

  constructor(private clienteServicio: ClienteService) { }

  // ngOnInit: Cuando el componente se inicializa, se llama al servicio ClienteServicio para obtener la lista de clientes desde Firestore. 
  // Se usa subscribe para recibir la lista y almacenarla en la propiedad clientes. 
  ngOnInit() {
    // Al inicializar el componente, se suscribe al servicio para obtener la lista de clientes 
    this.clienteServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;  // Almacena el listado en la propiedad 'clientes' 
    });
  }

  // getSaldoTotal(): number {
  //   let saldoTotal: number = 0;
  //   if(this.clientes){
  //     this.clientes.forEach(cliente => {
  //       if(cliente.saldo !== undefined){
  //         saldoTotal += cliente.saldo;
  //       }
  //     });
  //   }
  //   return saldoTotal;
  // }

  getSaldoTotal(): number {
    return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0;
  }
}
