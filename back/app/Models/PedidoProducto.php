<?php

namespace App\Models;

use App\Models\pedido;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PedidoProducto extends Model
{
    use HasFactory;

public function orden() {
    return $this->belongsTo(pedido::class);
}

public function producto() {
    return $this->belongsTo(Producto::class);
}

}
