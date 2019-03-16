<?php

namespace App\Http\Controllers;


use \Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function home(Request $request)
    {
        if ($request->session()->get('islogged') !== true) {
            return view('loginform');
        }
    }

    public function login(Request $request)
    {
        $validate = $this->validate($request,[
            'email' => 'email',
            'password' => 'min:5'
        ]);
    }
}