<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class UserController extends Controller
{

    public function islogin(Request $request)
    {

        return response()->json([
            'islogin' => $request->session()->get('isLogged') ?? false
        ]);
        //$request->session()->get('isLogged') ?? false
    }

    public function login(Request $request)
    {


        return response()->json([1, 5]);
    }
}
