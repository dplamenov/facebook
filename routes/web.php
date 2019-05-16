<?php

use Illuminate\Support\Facades\Route;
Route::get('/', 'DefaultController@home')->name('home');
Route::post('/login', 'DefaultController@login');
Route::get('logout', 'DefaultController@logout');