<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function logout(Request $request)
    {

        $request->session()->put('isLogged', true);
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
            'islogin' => $request->session()->get('isLogged')
        ]);
    }

    public function login(Request $request)
    {

    }
//
//    public function login(Request $request)
//    {
//        $validate = $this->validate($request, [
//            'email' => 'email',
//            'password' => 'min:5'
//        ]);
//
//        $user = User::where('email', $validate['email'])->where('password', $validate['password'])->get();
//        if (count($user) > 0) {
//            $request->session()->put('islogged', true);
//            $request->session()->put('user', $user);
//        }
//        return redirect()->route('home');
//    }
}
