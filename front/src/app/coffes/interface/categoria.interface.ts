export interface CategoriaResponse {
  data: Categoria[];
}

export interface Categoria {
  id: number;
  nombre: string;
  icono: string;
}