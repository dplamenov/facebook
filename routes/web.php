<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layout.layout');
});

Route::get('/api/user/isLogin', 'UserController@islogin');
Route::post('/api/user/login', 'UserController@login');
Route::get('/api/posts', 'PostController@index');
Route::post('/api/posts', 'PostController@store');
