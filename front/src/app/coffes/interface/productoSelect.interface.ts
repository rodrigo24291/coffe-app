export interface ProductosSelectItem {
    productos: Producto;
    cantidad: number;
  }

  export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    disponible: number;
    categoria_id: number;
    created_at: string;
    updated_at: string;
  }