<?php

namespace App\Http\Controllers;


use App\User;
use \Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function logout(Request $request){
        $request->session()->put('islogged', true);
        $request->session()->put('user', null);
        return redirect()->route('home');
    }

    public function home(Request $request)
    {
        if ($request->session()->get('islogged') === true) {
            return view('logged');
        } else {
            return view('loginform');
        }
    }

    public function login(Request $request)
    {
        $validate = $this->validate($request, [
            'email' => 'email',
            'password' => 'min:5'
        ]);

        $user = User::where('email', $validate['email'])->where('password', $validate['password'])->get();
        if (count($user) > 0) {
            $request->session()->put('islogged', true);
            $request->session()->put('user', $user);
        }
        return redirect()->route('home');
    }
}
