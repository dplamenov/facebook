<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function logout(Request $request)
    {

        $request->session()->put('isLogged', false);
//
//        $request->session()->put('islogged', true);
//        $request->session()->put('user', null);
//
//        return redirect()->route('home');
    }

    public function home(Request $request)
    {
        return;
    }

    public function islogin(Request $request)
    {

        return response()->json([
            'islogin' => true
        ]);
        //$request->session()->get('isLogged') ?? false
    }

    public function login(Request $request)
    {

    }
}
