<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    public function islogin(Request $request)
    {
        return response()->json(Auth::check());
    }

    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'min:3|max:40',
            'password' => 'min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors())->setStatusCode(422);
        }

        Auth::attempt(['username' => $request->get('username'), 'password' => $request->get('password')]);

        return response()->json(Auth::check());
    }
}
