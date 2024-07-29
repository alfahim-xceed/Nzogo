<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//user
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\GetUserInfo;


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user-info', [GetUserInfo::class,'show']);

// Route::get('/example-endpoint', function () {
//     return response()->json(['message' => 'Hello, world!']);
// });

// Route::post('/example-endpoint', function (Request $request) {
//     return response()->json(['msg' => 'date received']);
// });

Route::get('/example', function () {
    return response()->json(['message' => 'Hello, user!']);
});
