<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CategoriaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('categoria', CategoriaController::class);
    Route::apiResource('producto', ProductoController::class);
    Route::get('logout',[AuthController::class,"logout"]);
    Route::get('user', [AuthController::class, 'getUser']);
    Route::post('pedido',[PedidoController::class,"store"]);
    Route::get('pedido',[PedidoController::class,"index"]);
    Route::put('pedido',[PedidoController::class,"update"]);
    Route::post('pedido',[PedidoController::class,"disponibilidad"]);
});

Route::post('registro',[AuthController::class,"register"]);
Route::post('login',[AuthController::class,"login"]);


