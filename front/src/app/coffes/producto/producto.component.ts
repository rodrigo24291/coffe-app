import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { CoffeService } from '../coffe.service';
import { ProductosSelectItem } from '../interface/productoSelect.interface';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {

  constructor(private coffeservice: CoffeService, private messageService: MessageService) {
    this.subscription = coffeservice.productoEliminado.subscribe((id) => {
      this.showDialog(id);
    });
  }

  private subscription: Subscription;

  modaldata?: Producto;
  visible: boolean = false;
  cantidad: number = 0;
  precioTotal: number = 0;

  @Output() ProcutoSelect: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    // Puedes inicializar cualquier lógica necesaria al inicio aquí.
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Producto agregado' });
    }

  showDialog(id: number) {
    this.modaldata = this.productos.find((producto) => producto.id === id);
    this.visible = true;
  }

  aumentar(sum: number) {
    this.cantidad = this.cantidad + sum > 0 ? this.cantidad + sum : 0;
    this.precioTotal = this.modaldata?.precio !== undefined ? this.cantidad * this.modaldata?.precio : 0;
  }

  pedidos() {
    this.show()
    if (this.modaldata) {

      const existingProduct = this.coffeservice.ProductosSelect.find(
        (item) => item.productos.id === this.modaldata!.id
      );

      if (existingProduct) {
        // Si ya existe el producto y la cantidad es mayor que 0, actualiza la cantidad
        if (this.cantidad > 0) {
          existingProduct.cantidad += this.cantidad;
        } else {
          // Si la cantidad es 0, elimina el producto del array
          this.coffeservice.ProductosSelect = this.coffeservice.ProductosSelect.filter(
            (item) => item.productos.id !== this.modaldata!.id
          );
        }
      } else {
        // Si no existe y la cantidad es mayor que 0, agrega un nuevo elemento al array
        if (this.cantidad > 0) {
          this.coffeservice.ProductosSelect.push({
            productos: this.modaldata,
            cantidad: this.cantidad
          });
        }
      }

      this.coffeservice.TotalGastos = this.coffeservice.ProductosSelect.reduce((total, item) => {
        return total + (item.productos.precio * item.cantidad);
      }, 0);
      
      // Emitir el evento con el nuevo total
      this.ProcutoSelect.emit(this.coffeservice.TotalGastos);
    }
  }

  ngOnDestroy() {
    // Desuscribirse para evitar posibles pérdidas de memoria
    this.subscription.unsubscribe();
  }

  @Input() productos!: Producto[];
}
