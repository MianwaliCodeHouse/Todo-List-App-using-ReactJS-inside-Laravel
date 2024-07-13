<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/yasir',function(){
    echo "this is yasir page....";
});
Route::get('{any}', function () {
    return view('welcome');
})->where('any',".*");


// this concept will not work when you use react 
// Route::get('/admin/login',function(){
//     echo '<h1> hello this concept';
// });
