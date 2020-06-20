<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layout.layout');
});

Route::get('/api/isLogin', 'UserController@islogin');
