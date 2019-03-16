<?php

namespace App\Http\Controllers;


use App\User;
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

        $user = User::where('email', $validate['email'])->where('password', $validate['password'])->get();
        if(count($user) > 0){
            echo 'true';
        }
        else{
            echo 'false';
        }
    }
}