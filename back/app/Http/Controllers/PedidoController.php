<?php

namespace App\Http\Controllers;


use App\Models\pedido;
use App\Models\Producto;
use Illuminate\Http\Request;
use App\Models\PedidoProducto;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\PedidosCollection;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new PedidosCollection(pedido::with('usuario')->with('productos')->where('estado',0)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $pedido = new Pedido;
    $pedido->user_id = Auth::user()->id;
    $pedido->total = $request->Pedido['Total'];
    $pedido->save();

    foreach ($request->Producto as $elemento) {
        
            $producto = new PedidoProducto;
            $producto->producto_id = $elemento['productos']['id'];
            $producto->cantidad = $elemento['cantidad'];
            $producto->pedido_id = $pedido->id;
            $producto->created_at = now()->toDateTimeString();
            $producto->save();
    
        
    }


    return response()->json(['exit']);
}

    /**
     * Display the specified resource.
     */
    public function show(pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $pedidoId = $request->input('id'); // Asumiendo que 'id' es el nombre del campo en la solicitud

        $pedido = Pedido::find($pedidoId);

        $pedido->estado=1;
        $pedido->save();
        
        return $pedido;
    }
    public function disponibilidad(Request $request)
    {
        $productoId = $request->input('id'); // Asumiendo que 'id' es el nombre del campo en la solicitud

        $producto = Producto::find($productoId);

        $producto->disponible = ($producto->disponible == 1) ? 0 : 1;

        $producto->save();
        
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(pedido $pedido)
    {
        //
    }
}
