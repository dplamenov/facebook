<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layout.layout');
});
Route::post('/login', 'DefaultController@login');
Route::get('logout', 'DefaultController@logout');

Route::get('/api/isLogin', 'DefaultController@islogin');
