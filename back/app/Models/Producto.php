<?php

namespace App\Models;

use App\Models\pedido;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Producto extends Model
{
    use HasFactory;
    
public function ordenes() {
    return $this->belongsToMany(pedido::class, 'pedido_productos');
}

}
