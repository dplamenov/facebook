<?php

use Illuminate\Support\Facades\Route;
Route::get('/', 'DefaultController@home');
Route::post('/', 'DefaultController@login');