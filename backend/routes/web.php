<?php

use App\Http\Controllers\AccountController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
