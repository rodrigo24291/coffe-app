<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RequestRegistro;

class AuthController extends Controller
{
    public function getUser(Request $request)
    {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }
    
        return response()->json($user);
    }
    
    public function register(RequestRegistro $request){
        
        $data=$request->validated();
        
        $user=User::create([
            "name"=>$data['name'],
            "email"=>$data['email'],
            "password" => bcrypt($data['password'])
        ]);
        return["token"=>$user->createToken('token')->plainTextToken,
        "user"=>$user
    ];
    }

    public function login(LoginRequest $request){
       $data=$request->validated();
      if(!Auth::attempt($data)){
         return response()->json("Error o Contraseña invalida", 422);
      }
      $user=Auth::user();
      return["token"=>$user->createToken('token')->plainTextToken,
      "user"=>$user
  ];
    }

    public function logout(){
        $user=Auth::user();
        $user->currentAccessToken()->delete();
        return [
            "user"=>null
        ];
    }


}
