
import { ProductosSelectItem } from "./productoSelect.interface";

export interface ResponsePedido{
    Pedido:Pedido,
    Producto:ProductosSelectItem[] | ProductosSelectItem
}

export interface Pedido{
    Total:number,
    Estado:number
}