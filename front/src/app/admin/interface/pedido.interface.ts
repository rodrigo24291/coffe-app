interface PedidoData {
    data: Pedido[] | [];
  }
  
  interface Pedido {
    id: number;
    user_id: number;
    total: number;
    estado: number;
    created_at: string;
    updated_at: string;
    usuario: Usuario;
    productos: Producto[];
  }
  
  interface Usuario {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
  }
  
  interface Producto {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    disponible: number;
    categoria_id: number;
    created_at: string;
    updated_at: string;
    pivot: {
      pedido_id: number;
      producto_id: number;
      cantidad: number;
    };
  }
  
  // Puedes exportar estas interfaces para usarlas en otros archivos TypeScript
  export { PedidoData, Pedido, Usuario, Producto };
  